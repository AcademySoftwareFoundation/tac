var sorTablejs = function(setting) {
    "use strict";

    //default
    var config = {
        //引数がある場合引数のクエリ、なければsortableクラスをソート対象に
        targetTable: "table.sortable",
        cssAsc: "order-asc",
        cssDesc: "order-desc",
        cssBg: "sortable",
        selectorHeaders: "thead th"
    };

    //クエリ文字列のときは対象をクエリ文字列に
    if (setting instanceof String || typeof setting === "string") {
        config.targetTable = setting;
    }else if (typeof setting === "object") {
    //オブジェクトの場合は設定値を上書き
        Object.keys(setting).forEach(function(key) {
            config[key] = setting[key];
        });
    }

    /** Unimplemented
        cssHeader: "header",
        cssChildRow: "expand-child",
        sortInitialOrder: "asc",
        sortMultiSortKey: "shiftKey",
        sortForce: null,
        sortAppend: null,
        sortLocaleCompare: true,
        textExtraction: "simple",
        parsers: {},
        widgets: [],
        widgetZebra: {
            css: ["even", "odd"]
        },
        headers: {},
        widthFixed: false,
        cancelSelection: true,
        sortList: [],
        headerList: [],
        dateFormat: "us",
        decimal: '/\.|\,/g',
        onRenderHeader: null,
    **/

    /**
     * setEventToAllObject
     * 引数のエレメント全てに特定のイベントで発火する関数を定義する
     *
     * @param {HTMLElement} elem - 対象のエレメントの配列
     * @param {String} e - 対象のイベント
     * @param {Function} f - 発火する関数
     * @return なし
     */
    function setEventToAllObject(elem, e, f) {
        [...elem].map((v)=> {
            v.addEventListener(e, f, false);
        });
    }

    /**
     * getTableElement
     * 対象のテーブルのエレメントを取得
     *
     * @param {HTMLElement} elem - クリックしたth要素のエレメント
     * @return {HTMLElement} table - クリックした要素の属するテーブル
     */
    function getTableElement(elem) {
        //操作対象のテーブルを特定する
        //TABLEタグが見つかるまでelemの親要素をたどる
        var f = th => {
            return th.tagName.toUpperCase() === "TABLE"? th : f(th.parentNode);
        };
        return f(elem.parentNode);
    }

    /**
     * getTableData
     * テーブルのデータ取得
     *
     * @param {HTMLElement} tableElem - テーブル
     * @return {Array} data - tableElemのデータ配列
     */
    function getTableData(tableElem) {
        var data = [];
        //1行目を飛ばす
        for (var i = 1, l = tableElem.length; i < l; i++) {
            for (var j = 0, m = tableElem[i].cells.length; j < m; j++) {
                if (typeof data[i] === "undefined") {
                    data[i] = {};
                    data[i]["key"] = i; //ソート用のキー設定
                }
                data[i][j] = tableElem[i].cells[j].innerText;
            }
        }
        return data;
    }

    /**
     * sortTableData
     * テーブルのデータをソート
     *
     * @param {Array} tableData - tableElemのデータ配列
     * @param {Int} colNo - ソートする列番号
     * @param {Int} sortOrder - ソート順
     * @return {Array} tableData - ソート後配列
     */
    function sortTableData(tableData, colNo, sortOrder) {
        //クリックした列番号取得
        //ソート処理
        return tableData.sort((a, b) => {
            if (a[colNo] < b[colNo]) {
                return -1 * sortOrder;
            }            
            if (a[colNo] > b[colNo]) {
                return sortOrder;
            }
            return 0;
        });
    }

    /**
     * rewriteTableHTML
     * テーブルのHTMLを書き換え
     *
     * @param {HTMLElement} table - クリックした要素の属するテーブル
     * @param {Array} tableData - tableElemのデータ配列
     * @return なし
     */
    function rewriteTableHTML(table, tableData) {
        //ソート後のHTMLを構築して書き換え
        var html = "";
        tableData.forEach(function(x) {
            html += table.querySelectorAll("tr")[x["key"]].outerHTML;
        });
        table.querySelector("tbody").innerHTML = html;
    }

    /**
     * removeTHClass
     * TH要素のクラスを削除する
     *
     * @param {HTMLElement} table - クリックした要素の属するテーブル
     * @param {Int} sortOrder - ソート順
     * @return なし
     */
    function removeTHClass(table, tableData) {
        //テーブルの昇順降順Classをクリア・設定する
        var tableElem = table.querySelectorAll(config.selectorHeaders);
        Object.keys(tableElem).forEach(function(key) {
            tableElem[key].classList.remove(config.cssDesc);
            tableElem[key].classList.remove(config.cssAsc);
        });
    }

    /**
     * setTHClass
     * TH要素のクラスをリセットして、ソート対象のみ書き換え
     *
     * @param {HTMLElement} elem - クリックされたエレメント
     * @param {Int} sortOrder - ソート順
     * @return なし
     */
    function setTHClass(elem, sortOrder) {
        if (sortOrder === 1) {
            elem.classList.add(config.cssAsc);
        }else {
            elem.classList.add(config.cssDesc);
        }
    }

    /**
     * sortEvent
     * ソート処理イベント
     *
     * @param {HTMLElement} elem - クリックされたエレメント
     * @return {boolean} true
     */
    function sortEvent(elem) {

        //操作対象のテーブルを特定する
        var table = getTableElement(elem);
        if (!table) {
            return;
        }

        //テーブルデータ取得
        var tableData = getTableData(table.querySelectorAll("tr"));

        //ソート順取得
        //昇順クラスを持っていなければ昇順・それ以外なら降順
        var sortOrder = !elem.classList.contains(config.cssAsc) ? 1 : -1;

        //データソート処理
        tableData = sortTableData(tableData, elem.cellIndex, sortOrder);

        //ソート後のHTMLを構築して書き換え
        rewriteTableHTML(table, tableData);

        //テーブルの昇順降順Classをクリア・設定する
        removeTHClass(table, tableData);
        setTHClass(elem, sortOrder);
    }

    //ロード時にソート用イベントをバインドする
    window.addEventListener("load", function() {
        var elem = document.querySelector(config.targetTable).querySelectorAll(config.selectorHeaders);
        //カーソル表示用CSS追加
        document.querySelector(config.targetTable).classList.add(config.cssBg);
        setEventToAllObject(elem, "click", function(e) {sortEvent(e.target); });
    }, false);

    return this;
};
//Provisional
sorTablejs();

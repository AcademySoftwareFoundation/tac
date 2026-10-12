_Jekyll::Hooks.register [:posts, :pages, :documents], :pre_render do |doc|
  # Map GFM alert tags to Just the Docs classes
  callout_map = {
    'NOTE'      => 'note',
    'TIP'       => 'highlight',
    'WARNING'   => 'warning',
    'IMPORTANT' => 'important',
    'CAUTION'   => 'important'
  }

  callout_map.each do |gfm_type, jtd_class|
    # Convert '> [!NOTE]' followed by content into Just the Docs block attributes
    pattern = /^>\s*\[!#{gfm_type}\]\s*\n((?:^>.*$\n?)+)/i
    doc.content.gsub!(pattern) do
      content = $1
      "#{content}{: .#{jtd_class} }\n"
    end
  end
end


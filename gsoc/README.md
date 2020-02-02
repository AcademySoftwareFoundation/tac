# ASWF Google Summer of Code 2020

The mission of the Academy Software Foundation (ASWF) is to increase the
quality and quantity of contributions to the content creation industry's
open source software base; to provide a neutral forum to coordinate
cross-project efforts; to provide a common build and test infrastructure;
and to provide individuals and organizations a clear path to participation
in advancing our open source ecosystem.

Member projects are focused primarily on visual effects and animation
production, and at present include 5 distinct software packages. Student
summer project applications can be for any of these packages individually,
as well as potentially including tasks that bridge between them or provide
common infrastructure (they share CI and other resources). The current
member projects are:

* **OpenColorIO** : A complete color management solution geared towards
  motion picture production with an emphasis on visual effects and computer
  animation.

* **OpenCue** : A render management / job queueing system you can deploy for
  visual effects and animation productions.

* **OpenEXR** : The specification and reference implementation of the EXR
  file format, the professional-grade image storage format of the motion
  picture industry.

* **OpenTimelineIO** : API and interchange format for editorial timeline
  information.

* **OpenVDB** : Hierarchical data structure and a suite of tools for the
  efficient storage and manipulation of sparse volumetric data.


## Application Instructions for Students

Please familiarize yourself with the several software projects under our
organization. The individual projects are listed below with their home
pages, GitHub repositories, and a list of possible projects.

You may choose a summer task from any of our software projects. It is also
permissible to propose (a) a task that is common infrastructure shared by
the projects, such as with our CI system; (b) a task that crosses project
boundaries or involves two projects; (c) a task that is technically in a
non-ASWF code base but for which our organization is an appropriate mentor
(as an illustrative example: adding comprehensive OpenColorIO support to a
widely used open source project).

All of our projects maintain their own CONTRIBUTING guidelines, please read
them for the project you are interested in. They each also have separate
contributor license agreements (CLAs) which must be signed for them to
accept contributions.

**Successfully submitting a Pull Request to the ASWF software project you are
applying to is a strict requirement prior to submitting an application.**
This is not negotiable. We will not even read applications from students who
have not submitted an acceptable PR to the project they are applying to
participate in. It can be a truly minimal change -- for example, fixing a
typo in an error message. The purpose of this requirement is to prove that
you already have the skills to set up a GitHub login, successfully clone the
project, build it, make a change, submit a PR, and interact with the
community for code review.

In addition to ideas listed below, the GitHub "Issues" page for each project
will have issues tagged "GSoC" if they seem like an appropriate size for a a
GSoC summer project. You will also see many issues tagged "good first
issue", those might be ideal candidates for your small trial PR to qualify
for application.

Individual project's developer mail lists can be found here:
https://lists.aswf.io/


## Application template

Please use this application template. You don't have to stick precisely to
this, feel free to expand or tell us any other relevant details, but this is
a good place to start.

The applications will be judged both by the individual leadership teams of
the software project you propose to work on, as well as representatives of
the ASWF technical advisory council.

    Name:

    School / year / area of study:

    Relevant courses, materials studied, or skills:

    ASWF project you are interested in:

    Project proposal:

    Tell us about your interest in this project, what you hope to
    contribute, and what you hope to get from this experience:

    Please tell us any other relevant information, including interesting
    programming projects you have done, other open source projects you have
    participated in and what you did in those projects:



## Project information and suggested ideas list


### OpenColorIO

Home page:  https://opencolorio.org/ <br>
GitHub:     https://github.com/AcademySoftwareFoundation/OpenColorIO <br>
Skills/knowledge relevant to the project: C++11, CMake, color science

**Project Ideas**:

* Add Metal, Vulcan, or CUDA language support to GPU renderer
    - The OCIO Processor currently supports rendering color transforms on a GPU 
      with GLSL (OpenGL), HLSL (DirectX), or CG. With Apple deprecating OpenGL 
      support and the availability of several additional high-performance GPU 
      computing platforms, we desire to add shader language support for one or 
      more of these to expand the capability and reach of OCIO. This will also 
      be a critical need for OCIO to maintain full cross-platform support.
    - Mentor suggestion: Patrick Hodoul
    - Special skills: Familiar with C++, shader development, and implementing 
      graphics APIs.

* Restore Java bindings
    - The OCIO Java language bindings have not yet been updated to support the
      newly developed OCIO v2 API. Java provides additional Android platform 
      support, but needs some effort to revive. Additionally, adding Java unit
      test support to OCIO's CI infrastructure would help maintain the 
      functionality as OCIO continues to evolve.
    - Mentor suggestion: Michael Dolan
    - Special skills: Comfortable with Java, with some knowledge of wrapping a 
      C++ library with the JNI.
    
* Add OCIO support to FFmpeg or another FOSS project
    - An important effort for OCIO is expanding the libraries and applications 
      where OCIO is implemented. Users have specifically called out FFmpeg as 
      a library and command-line tool where they would like to see OCIO 
      support, but any other FOSS project leveraged by digital artists or 
      production pipelines could be considered. This could also include 
      upgrading an existing implementation to support the OCIO v2 API and 
      leverage new functionality.
    - Mentor suggestion: Doug Walker
    - Special skills: Familiarity with prospective host library or tool, 
      and knowledge of working with image buffers and authoring plugins.

* Develop GUI for interactive OCIO config authoring and visualization
    - OCIO is all about color management, but the visual results of a config 
      author's decisions are not verifiable until the config is generated and 
      loaded into a host application. Learning and using OCIO could be greatky
      aided with a GUI which provides interactive visual feedback and 
      validation while a config is being authored. This could be a standalone 
      Qt or PySide application, or an expanded plugin within an existing 
      graphics application like Foundry's Nuke.
    - Mentor suggestion: Michael Dolan
    - Special skills: Experience with GUI and graphics programming in C++ or 
      Python, understanding of UX, and interest in data visualization.

### OpenCue

Home page:  https://www.opencue.io <br>
GitHub:     https://github.com/AcademySoftwareFoundation/OpenCue <br>
Skills/knowledge relevant to the project:

**Project Ideas**:

* Another project
    - Description
    - Mentor Suggestion: Pat Smith
    - Special skills:



### OpenEXR

Home page:  https://www.openexr.com/ <br>
GitHub:     https://github.com/AcademySoftwareFoundation/openexr <br>
Skills/knowledge relevant to the project:

**Project Ideas**:

* Another project
    - Description
    - Mentor Suggestion: Pat Smith
    - Special skills:




### OpenTimelineIO

Home page:  http://opentimeline.io <br>
GitHub:     https://github.com/PixarAnimationStudios/OpenTimelineIO <br>
Skills/knowledge relevant to the project:

**Project Ideas**:

* Another project
    - Description
    - Mentor Suggestion: Pat Smith
    - Special skills:




### OpenVDB

Home page:  https://www.openvdb.org/ <br>
GitHub:     https://github.com/AcademySoftwareFoundation/openvdb <br>
Skills/knowledge relevant to the project:

**Project Ideas**:

* Another project
    - Description
    - Mentor Suggestion: Pat Smith
    - Special skills:



### Cross-project infrastructure

... ideas go here ...




VideoJS - [HTML5 Video Player](http://videojs.com)
==================================================

This is a fork of Videojs player Version 3.0 BETA.
The current version of the player from videojs website could be a latest version.

But, all the development in this repository happens based on videojs version 3.0.
In addition to the videojs player features the following are added.

1. You tube and vimeo video playing support.
2. Custom plugins. At the moment the following plugins are available.
   - <to be updated>

Using -
-------

Check the doc directory.

Looking for latest videojs ?
----------------------------

Visit the site at [videojs.com](http://videojs.com) for download options and instructions of the latest videojs player.

To build video-js from the latest version of the source, clone the source repository and run:
sh build.sh
in the video-js directory using the commnand-line/terminal of a unix-based system.

Contributing
------------
If you'd like to help out on VideoJS, you are awesome. Updates should be made to the source files and then make a pull request.

When working on VideoJS code, you can use dev.html as your test page. It doesn't exist in the repo and changes to it won't be tracked. To get your own copy simply clone the repo and copy dev.html.example.
cp dev.html.example dev.html

You can use dev.html to test new code. It's simple HTML doc that includes all the source files. Send a pull request for any updates.

---
BETA NOTES  
Version 3 is almost a complete rewrite of the previous versions of VideoJS. New features includes:

  - HTML/CSS Controls and API now work for both the HTML5 and Flash versions.
  - Custom Super-lightweight Flash Fallback
  - Embed Code is much simpler.
    - No more "vjs-box" div required, just use the video tag.
    - No more embedding of Flash fallback within the video tag HTML.

---

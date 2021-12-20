/*
 * Updated and improved jQuery Raptorize Plugin 2.0. Compatible with jQuery 1.7+, 2.x and 3.x.
 *
 * Copyright 2021, Vlad Poskatcheev
 *
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

  $.fn.raptorize = function (raptorOptions) {

    var defaults = {
      enterOn: 'click', // possible values: timer, konami-code, click
      delayTime: 5000, // delay duration before raptor attacks in timer mode
      assets: {
        root: '/',
        raptorImage: 'images/raptor.png',
        raptorSoundMp3: 'sounds/raptor-sound.mp3',
        raptorSoundOgg: 'sounds/raptor-sound.ogg'
      }
    };

    // merge user provided options with default values
    var options = $.extend(true,{}, defaults, raptorOptions);

    var assets = options.assets;
    if (!assets.root.endsWith('/')) {
      assets.root = assets.root + '/';
    }

    var elRaptorImg = $('<img id="elRaptor" src="' + assets.root + assets.raptorImage + '" />')
      .css({
        "position": "fixed",
        "display": "block",
        "bottom": "-700px",
        "right": "0"
      });

    var elRaptorAudio = $('<audio id="elRaptorShriek" preload="auto">'
      + '<source src="' + assets.root + assets.raptorSoundMp3 + '" />'
      + '<source src="' + assets.root + assets.raptorSoundOgg + '" />'
      + '</audio>');

    $('body').append(elRaptorImg, elRaptorAudio);

    return this.each(function () {
      var locked = false;

      function animateRaptor() {
        locked = true;
        $(window).scrollTop(9999999);

        elRaptorAudio.get(0).currentTime = 0;
        elRaptorAudio.get(0).play();

        elRaptorImg
          .animate({"bottom": "0px"}, 400) // pop out at "full height"
          .animate({"bottom": "-120px"}, 100) // lower so only head is visible
          .delay(400) // dramatic pause
          .animate( // move left
            {"right": elRaptorImg.position().left + 400},
              2200,
              function() {
                elRaptorImg.css({"bottom": "-700px", "right": "0"});
                locked = false;
              }
          );
      }

      if (options.enterOn === 'timer') {
        setTimeout(animateRaptor, options.delayTime);
      } else if (options.enterOn === 'click') {
        $(this).on('click', function (e) {
          e.preventDefault();
          if (!locked) {
            animateRaptor();
          }
        });
      } else if (options.enterOn === 'konami-code') {
        var keysPressed = [];
        var konamiCode = "38,38,40,40,37,39,37,39,66,65";
        $(window).on("keydown.raptorz", function (e) {
          keysPressed.push(e.keyCode);

          if (keysPressed.length > 10) {
            keysPressed = keysPressed.slice(1);
          }

          if (keysPressed.toString() === konamiCode) {
            animateRaptor();
          }
        });
      }
    });
  }
})(jQuery);

# Raptorize jQuery Plugin

This is an homage to the classic Raptorize plugin: [https://zurb.com/playground/jquery-raptorize](https://zurb.com/playground/jquery-raptorize). It was built back in 2010 with jQuery 1.4 and is overdue for an update to support later jQuery versions. For a complete list of improvements, see changelog below.

## Installation

Steps:
* Copy resource files to your project: [/images/raptor.png](/images/raptor.png), [/sounds/raptor-sound.mp3](/sounds/raptor-sound.mp3) and [/sounds/raptor-sound.ogg](/sounds/raptor-sound.ogg).
* Copy jQuery plugin: [/js/jquery.raptorize.2.0.js](/js/jquery.raptorize.2.0.js).
* Include plugin in your html page and raptorize an element of your choice.

Code Sample:

```html
<!-- Plugin requires jQuery version 1.7+ -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script src="/js/jquery.raptorize.2.0.js"></script>

<script type="text/javascript">
  $(document).ready(function() {
    $('SELECTOR_TARGET_OF_YOUR_CHOICE').raptorize();
  });
</script>
```

## Changelog

- Support jQuery versions: 1.7+, 2.x and 3.x (regular, but not slim).
- Fix minor bug where audio would get out of sync when raptor is triggered repeatedly.
- Allow konami-code to be used more than once.
- Optimize konami-code logic to track and compare only the last 10 keystrokes 
- Simplify animate logic to avoid multiple nested callbacks.
- Remove deprecated browser check for audio support. It made sense in 2010, but in 2021 over 98% of modern browsers support audio tags ([source](https://caniuse.com/?search=audio)).

## FAQ

### Where does the plugin expect to find the image and sound files?

The default location is `/images/raptor.png`, `/sounds/raptor-sound.mp3` and `/sounds/raptor-sound.ogg`.  

### How to specify a custom path for image and sound files? 

Edit your `jquery.raptorize.2.0.js` script and update variables `raptorImageSrcPath`, `raptorSoundMp3SrcPath` and `raptorSoundOggSrcPath`.

### What is the difference between jQuery 3.x regular and slim?

Raptorize plugin works only with regular version of jQuery 3.x. Slim version is not supported because it excludes the animation effects module. For more info, see: [SO post](https://stackoverflow.com/questions/35424053/what-are-the-differences-between-normal-and-slim-package-of-jquery).  

### Is there a native browser version that does not depend on jQuery?

Not at this time, but there could be in the future if I get around to it.

# Raptorize jQuery Plugin

This is an homage to the classic Raptorize plugin ([https://zurb.com/playground/jquery-raptorize](https://zurb.com/playground/jquery-raptorize)), which was built in 2010 with jQuery 1.4. It is due for a much-needed update to support newer jQuery versions. For a complete list of improvements, see changelog below.

Want to see the clever girl in action? [Check her out here](https://randomvlad.github.io/raptorize-jquery).

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

## Options

Plugin's `raptorize()` method supports an `options` parameter to customize things.

| Parameter | Default Value | Notes |
|---|---|---|
| `enterOn` | click | Possible values: `click`, `timer`, `konami-code` |
| `delayTime` | 5000 | Delay duration in milliseconds before raptor is triggered. Only applicable for `timer` mode. |
| `assets.pathPrefix` | Empty String| Path prefix for raptor asset files. Default empty value implies a relative path based on html page running the plugin. Override value based on your project setup. |
| `assets.raptorImage` | images/raptor.png | |
| `assets.raptorSoundMp3` | sounds/raptor-sound.mp3 |  |
| `assets.raptorSoundOgg` | sounds/raptor-sound.ogg |  |

Examples:

```javascript
// attach raptor to body html element and trigger after a 3 second delay timer
$('body').raptorize({ 
  'enterOn': 'timer',
  'delayTime': 3000
});
```

```javascript
// override asset locations as needed per project needs 
$('body').raptorize({
  'enterOn': 'konami-code',  
  'assets': {
    'pathPrefix': '/resources',
    'raptorImage': 'raptor.png',
    'raptorSoundMp3': 'raptor-sound.mp3',
    'raptorSoundOgg': 'raptor-sound.ogg'
  }
});
```

## Changelog

- Support jQuery versions: 1.7+, 2.x and 3.x (regular, but not slim).
- Fix minor bug where audio would get out of sync when raptor is triggered repeatedly.
- Allow konami-code to be used more than once.
- Support overriding default asset locations. 
- Optimize konami-code logic to track and compare only the last 10 keystrokes. 
- Simplify animate logic to avoid multiple nested callbacks.
- Remove deprecated browser check for audio support. It made sense in 2010, but in 2021 over 98% of modern browsers support audio tags ([source](https://caniuse.com/?search=audio)).

## FAQ

### What is the Konami Code?

It's the following keys pressed in sequence: ↑ ↑ ↓ ↓ ← → ← → B A. For more info, see: [Wiki Page](https://en.wikipedia.org/wiki/Konami_Code).

### Where does the plugin look for the image and sound files?

The default location is __relative__ to the html page executing the plugin. Namely `images/raptor.png`, `sounds/raptor-sound.mp3` and `sounds/raptor-sound.ogg`. However, if your project needs to store these files elsewhere, then the paths can be overridden though the `assets` option. For example, setting `assets.pathPrefix = '/'` would use an __absolute__ path of `/images/raptor.png` and so forth.         

### What is the difference between jQuery 3.x regular and slim?

Raptorize plugin works only with regular version of jQuery 3.x. Slim version is not supported because it excludes the animation effects module. For more info, see: [SO post](https://stackoverflow.com/questions/35424053/what-are-the-differences-between-normal-and-slim-package-of-jquery).  

### Why does the sound not always play in timer mode?

Many browsers block autoplay media when the page is initially loaded. For more info, see: [Chrome Autoplay](https://developer.chrome.com/blog/autoplay/) and [Firefox Autoplay](https://support.mozilla.org/en-US/kb/block-autoplay).  

### Is there a native browser version that does not depend on jQuery?

Not at this time, but there could be in the future if I get around to it.

## use

```js
var videoPlayTime = require('videojs-playtime');
videojs.plugin('videoPlayTime', videoPlayTime);
videojs("my-video", {
  techOrder: ['flash','html5'],
  plugins: {
      videoPlayTime: null
    }
}, function() {

});

player.playTime();
```
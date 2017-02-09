## use

```js
var videoPlayTime = require('video-playTime');
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
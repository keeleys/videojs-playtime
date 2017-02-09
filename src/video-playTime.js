module.exports = function (options) {
    var beginTime, learnTime, startTime;
    this.on('timeupdate', function() {
        if(this.currentTime() === startTime) return;
        var now = new Date().getTime();
        beginTime = beginTime || now;
        learnTime = learnTime || 0;
        learnTime += (now - beginTime);
        beginTime = now;
    });
    this.on('pause', function() {
        beginTime = 0;
        console.log(this.playTime());
    });
    this.on('playing', function() {
        startTime = this.currentTime();
    });
    this.playTime = function() {
        return Math.floor(learnTime / 1000);
    };
};
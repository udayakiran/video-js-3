var VjsProgressUpdater = Class.create({

  initialize: function(options) {
    var player = options['player']
    var progressTracker = new VideoProgressTracker({
        progress_percent: options.progress_percent,
        progress_update_url: options.progress_update_url,
        player: player,
        videoDurationCallback: player.duration
    });

    if(progressTracker.hasProgressUpdateUrl()) {
        player.addEvent('timeupdate', updateProgress);
    }

    if(progressTracker.hasValidOptions()) {
        player.addEvent('play', initPrevPosition);
        player.addEvent('ended', completeUpdate);
    }

    function updateProgress(event) {
        console.log(player);
        console.log(player.duration());
        console.log('-----------------------------');
        var current_position = parseInt(player.currentTime());
        progressTracker.updateProgress(current_position);
    }

    function initPrevPosition(event) {
       // progressTracker.initPosition();
    }

    function completeUpdate(event){
        setPrevPosition();
        var duration = parseInt(player.duration());
        progressTracker.updateProgress(duration, true);
    }

     function setPrevPosition() {
      if(progressTracker.prevPostion <= 0) {
        var player_duration = player.duration();
        if (player_duration != 'undefined')
          progressTracker.initPosition();
      }
    }
  }
});
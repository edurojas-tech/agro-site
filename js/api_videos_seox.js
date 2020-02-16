var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var player;
      var playVideo = document.getElementById('playVideo')
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '380',
          width: '700',
          videoId: 'QLH6NWu1Rtc',
          events: {
            'onReady': playDoVideo,
            //'onStateChange': pararVideo
          }
        });
      }

     
      function playDoVideo(event) {
        var botaoPlayVideo = document.getElementById('playVideo')
        botaoPlayVideo.onclick = function(){
          event.target.playVideo();
        }
      }
      
      var done = false;
      function pararVideo(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
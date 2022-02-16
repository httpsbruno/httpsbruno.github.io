 $(document).ready( function() {
    $("#tabs").tabs();

    $(".videos > a").on("click", function (){
        const video = this.href.split("#")[1];

        $(`.accordion`).remove();
        $(`#player`).remove();
        $(`#${video}`).append(`  <div id="player"></div><div class="accordion" ></div> `);
        $(`#${video} > .accordion` ).append(getVideos(video));
        $(`.accordion`).accordion();
    
    });

    $("div > button").on("click", (e) =>{
    console.log("oi")
    })

  } );

  const videosId = ["I_1IFSMpf6c","BwZs3H_UN3k","eW7Twd85m2g","aWzlQ2N6qqg","TcMBFSGVi1c"]
  var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let player;
  function getVideos(v){
       // onYouTubeIframeAPIReady();
        const video = v.split("-")[1];
        onYouTubeIframeAPIReady(video);
        const  html = `
                       <h3 > Título</h3>
                       <div class="info"> 
                       <p id="title"> </p>
                       </div>
                     
                       <h3 > Autor</h3>
                       <div class="info"> 
                       <p id="author"> </p>
                       </div>
                     
                       <h3 > Qualidade</h3>
                       <div class="info"> 
                       <p id="quality"></p>
                       </div>

                       <h3 > Assista no Youtube</h3>
                       <div class="info"> 
                       <p id="videoUrl"></p>
                       </div>
                       `;
                      
        return html;
  }

  function onYouTubeIframeAPIReady(id) {
   player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: videosId[id-1],
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });

  }
  
  function onPlayerReady(event) {
    event.target.playVideo();
    const data = event.target.playerInfo.videoData; 
   $("#title").append(data.title);
 
  }

  var done = false;
  function onPlayerStateChange(event) {
    const data = event.target.playerInfo; 
    if (event.data == YT.PlayerState.PLAYING && !done) {
      $("#author").html((data.videoData.author).toString());
      $("#quality").html(data.videoData.video_quality);
      $("#videoUrl").html(`Assista este vídeo no <a href="${data.videoUrl}">YouTube</a>.`);
    }
 

    if(event.data == YT.PlayerState.ENDED){
      alert("Seu video acabou!");
    }

  }
 
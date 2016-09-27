// create Player object
let Player = {
  player: null,

  // upon initialize, inject youtube iframe tag
  init(domId, playerId, onReady){
    window.onYouTubeIframeAPIReady = () => {
      this.onIframeReady(domId, playerId, onReady)
    }
    let youtubeScriptTag = document.createElement("script")
    youtubeScriptTag.src = "//www.youtube.com/iframe_api"
    document.head.appendChild(youtubeScriptTag)
  },

  // create youtube player with YT API
  onIframeReady(domId, playerId, onReady){
    this.player = new YT.Player(domId, {
      height: "360",
      width: "420",
      videoId: playerId,
      events: {
        "onReady": (event => onReady(event)),
        "onStateChange": (event => this.onPlayerStateChange(event))
      }
    })
  },

  onPlayerStateChange(event){ },

  getCurrentTime(){
    return Math.floor(this.player.getCurrentTime() * 1000)
  },

  seekTo(millsec){
    return this.player.seekTo(millsec / 1000)
  }
}

export default Player

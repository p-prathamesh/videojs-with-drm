let player = videojs("video_player");
player.src({
  src: "...",  //Add mpd url here
  type: "application/dash+xml", // dash+xml for mpd url
  keySystemOptions: [
    {
      name: 'com.widevine.alpha',
      options: {
        serverURL: '' //License key add here
      }
    }
  ]
});
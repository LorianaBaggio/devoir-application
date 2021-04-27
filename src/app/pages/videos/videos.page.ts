import { Component, OnInit } from '@angular/core';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  constructor(private youtubeVideoPlayer: YoutubeVideoPlayer) {}

  ngOnInit() {
  }

  invokeVideoPlayer(){
    this.youtubeVideoPlayer.openVideo('pass-video-id');
  }  

}

import { AfterViewInit, Component, OnInit } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player';

import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-wordpress-medias',
  templateUrl: './wordpress-medias.page.html',
  styleUrls: ['./wordpress-medias.page.scss'],
})
export class WordpressMediasPage implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    if (Capacitor.platform === 'web') {
      this.initializeYoutubePlayerPluginWeb();
    } else { // Native
      this.initializeYoutubePlayerPluginNative();
    }
  }

  async initializeYoutubePlayerPluginWeb() {
    console.log('HomePage::initializeYoutubePlayerPluginWeb() | method called');
    const options53 = {playerId: 'youtube-player53', playerSize: {width:270, height: 150}, videoId: 'gHuGIhykcFs', debug: true};
    const result53 = await YoutubePlayerWeb.initialize(options53);
    console.log('playerReady', result53);

    (result53 as any).player.addEventListener('onPlaybackQualityChange', (event) => {
      console.log('playback quality is', event);
    });

    (result53 as any).player.addEventListener('onStateChange', (event) => {
      console.log('state is', event);
    });
  }

  async destroyYoutubePlayerPluginWeb() {
    console.log('HomePage::destroyYoutubePlayerPluginWeb() | method called');
    const result = await YoutubePlayerWeb.destroy('youtube-player');
    console.log('destroyYoutubePlayer', result);
  }

  async getPlayersEventsStatePluginWeb() {
    console.log('videosPage::getPlayersEventsStatePluginWeb() | method called');
    const result = await YoutubePlayerWeb.getAllPlayersEventsState();
    console.log('allPlayersEventsState', result);
  }

  async initializeYoutubePlayerPluginNative() {

    const { YoutubePlayer } = Plugins;

    const options = {width: 270, height: 150, videoId: 'tDW2C6rcH6M'};
    const playerReady = await YoutubePlayer.initialize(options);
  }

}

import { AfterViewInit, Component, OnInit } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player';

import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-sass-variables',
  templateUrl: './sass-variables.page.html',
  styleUrls: ['./sass-variables.page.scss'],
})
export class SassVariablesPage implements OnInit, AfterViewInit {

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
    const options30 = {playerId: 'youtube-player30', playerSize: {width:270, height: 150}, videoId: 'tnmGdg46LnM', debug: true};
    const result30 = await YoutubePlayerWeb.initialize(options30);
    console.log('playerReady', result30);

    (result30 as any).player.addEventListener('onPlaybackQualityChange', (event) => {
      console.log('playback quality is', event);
    });

    (result30 as any).player.addEventListener('onStateChange', (event) => {
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

import { AfterViewInit, Component, OnInit } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player';

import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-angular-introduction',
  templateUrl: './angular-introduction.page.html',
  styleUrls: ['./angular-introduction.page.scss'],
})
export class AngularIntroductionPage implements OnInit, AfterViewInit {

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
    const options = {playerId: 'youtube-player', playerSize: {width:270, height: 150}, videoId: 'aBE0St5yI7U', debug: true};
    const result = await YoutubePlayerWeb.initialize(options);
    console.log('playerReady', result);

    (result as any).player.addEventListener('onPlaybackQualityChange', (event) => {
      console.log('playback quality is', event);
    });

    (result as any).player.addEventListener('onStateChange', (event) => {
      console.log('state is', event);
    });

    const options1 = {playerId: 'youtube-player1', playerSize: {width: 270, height: 150}, videoId: 'fOuKMuaGJ54'};
    const result1 = await YoutubePlayerWeb.initialize(options1);
    console.log('playerReady', result1);
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

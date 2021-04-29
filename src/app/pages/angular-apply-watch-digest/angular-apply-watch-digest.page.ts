import { AfterViewInit, Component, OnInit } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player';

import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-angular-apply-watch-digest',
  templateUrl: './angular-apply-watch-digest.page.html',
  styleUrls: ['./angular-apply-watch-digest.page.scss'],
})
export class AngularApplyWatchDigestPage implements OnInit, AfterViewInit {

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
    const options45 = {playerId: 'youtube-player45', playerSize: {width:270, height: 150}, videoId: 'WrqOB0r2svY', debug: true};
    const result45 = await YoutubePlayerWeb.initialize(options45);
    console.log('playerReady', result45);

    (result45 as any).player.addEventListener('onPlaybackQualityChange', (event) => {
      console.log('playback quality is', event);
    });

    (result45 as any).player.addEventListener('onStateChange', (event) => {
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

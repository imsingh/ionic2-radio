import {Page} from 'ionic-framework/ionic';
import {RadioPlayer} from '../../radio/radio';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [RadioPlayer]
})
export class HomePage {
  player:any;
  constructor(player: RadioPlayer) {
  	this.player = player;
  }

  play() {
  	this.player.play().then(() => {
  		console.log('Playing');
  	});
  }

  pause() {
  	this.player.pause();
  }
}

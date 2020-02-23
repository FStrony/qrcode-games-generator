import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GamesProvider } from '../../providers/games/games';
@Component({
 selector: 'page-detail',
 templateUrl: 'detail.html',
})
export class DetailPage {
 name: string = "";
 platform: object[]  = [];
 qrCode: string = null;
 switch: boolean;
 pc: boolean;
 ps4: boolean;
 xbox: boolean;
 constructor(
   public gameProvider: GamesProvider,
   public navParams: NavParams) {
 }
 ionViewWillEnter() {
   const game = this.navParams.get('game')
   if(game) {
     this.name = game.name;
     this.platform = game.platform;
     this.updateCheckBoxes(this.platform);
   }
 }
 ionViewWillLeave() {
   const game = {
     name: this.name,
     platform: this.platform
   }
   if(this.navParams.get('game')) {
     this.gameProvider.update(game, this.navParams.get('index'))
   } else {
     this.gameProvider.insert(game)
   }
 }
 createCode() {
   const qrData = { name: this.name, ...this.platform };
   this.qrCode = JSON.stringify(qrData);
 }
 updatePlatform(checked, name) {
   if(checked) {
     this.platform.push(name);
   } else {
     this.platform.splice(this.platform.indexOf(name), 1);
   }
 }
 updateCheckBoxes(platform) {
   platform.forEach(name => {
     if(name === 'Nintendo Switch') {
       this.switch = true
     }
     if(name === 'PC') {
       this.pc = true
     }
     if(name === 'Playstation 4') {
       this.ps4 = true
     }
     if(name === 'Xbox One') {
       this.xbox = true
     }
   })
 }
}
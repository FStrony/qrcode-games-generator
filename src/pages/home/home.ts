import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { GamesProvider } from '../../providers/games/games';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})

export class HomePage {
 games: object[] = []
 constructor(
   public gamesProvider: GamesProvider,
   public navCtrl: NavController,
   public navParams: NavParams) {
     this.games = this.gamesProvider.games
 }
 
 convertObjectToString(obj) {
   return JSON.stringify(obj)
 }

 convertPlatformToString(platform) {
   return platform.join(' - ')
 }
 
 openDetail(game, index) {
   this.navCtrl.push(DetailPage, { game, index })
 }
}
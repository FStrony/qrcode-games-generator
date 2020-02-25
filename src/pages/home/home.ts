import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { GamesProvider } from '../../providers/games/games';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  games: object[] = []
  constructor(
    public barcodeScanner: BarcodeScanner,
    public gamesProvider: GamesProvider,
    public alertCtrl: AlertController,
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
  openCamera() {
    this.barcodeScanner.scan().then(barcodeData => {
      const alert = this.alertCtrl.create({
        title: 'Dados do QrCode',
        message: barcodeData.text
      })
      alert.present()
    }, (err) => {
      console.log('Error: ', err);
    });
  }
}
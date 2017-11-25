
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams , AlertController , ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Keyboard } from "ionic-native";
@Component({

  templateUrl: 'email-verification.html',
})
export class EmailVerificationPage {

  Email: any;
  constructor(public navCtrl: NavController, public alrt: AlertController,public toast: ToastController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    this.Email = this.navParams.data;
    Keyboard.disableScroll(true);
  }
  backgrounds = [
    'assets/img/backgrounds/1.png',
    'assets/img/backgrounds/2.png',
    'assets/img/backgrounds/3.png',
    'assets/img/backgrounds/4.png'
  ];
  // Extra Features

back(){
  this.navCtrl.pop();
}

}

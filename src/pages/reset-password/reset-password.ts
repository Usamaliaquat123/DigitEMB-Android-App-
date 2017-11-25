import { Keyboard } from 'ionic-native';
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './../../models/user';

@Component({
 
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  backgrounds = [
    'assets/img/backgrounds/1.png',
    'assets/img/backgrounds/2.png',
    'assets/img/backgrounds/3.png',
    'assets/img/backgrounds/4.png'
  ];
  constructor(public keyboard : Keyboard,public navCtrl: NavController,public toast: ToastController, public navParams: NavParams, public afAuth: AngularFireAuth) {
    Keyboard.disableScroll(true);
  }
user = {}  as User;


RecoverEmail(){
  if(this.user.email == ''){
      this.toast.create({
      message:'Please enter valid email',
      duration: 3000
    }).present();
      
  }else{
    firebase.auth().sendPasswordResetEmail(this.user.email).then(data => {
      this.toast.create({
        message:'Your Password link has been send to your email',
        duration: 3000,
        position: 'top'
      }).present();
    }).catch(err => {
      this.toast.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      }).present();
    })

  }
  
}
}

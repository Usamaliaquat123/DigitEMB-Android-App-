

import { ResetPasswordPage } from './../reset-password/reset-password';

import { DigitEmpApiProvider } from './../../providers/digit-emp-api/digit-emp-api';

import { EmailVerificationPage } from './../email-verification/email-verification';
import { RegisterPage } from './../register/register';
import { Network } from '@ionic-native/network';
import { UserMenuPage } from './../user-menu/user-menu';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomepagePage } from './../homepage/homepage';
import { Component , NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, ToastController} from 'ionic-angular';
import { User } from '../../models/user';


import { AngularFireDatabase } from 'angularfire2/database';
// Firebase Authentication
import { AngularFireAuth } from "angularfire2/auth";
import  firebase  from 'firebase'; 
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
// Getting Interface data
user = {} as User;
// Adjusting Background images
backgrounds = [
  'assets/img/backgrounds/1.png',
  'assets/img/backgrounds/2.png',
  'assets/img/backgrounds/3.png',
  'assets/img/backgrounds/4.png'
];
// Getting components data
email:string = '';
password:string = '';
name:string = '';
CoverImage: string = '';
fbUserDataFromfbApp : any;
  constructor(public zone : NgZone,public DigitEMBapi : DigitEmpApiProvider,public afAuth : AngularFireAuth, public afDatabase : AngularFireDatabase, public facebook : Facebook,public toast: ToastController,public network : Network,public alrt: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    Keyboard.disableScroll(true);
    
  }

  displayNetworkUpdate(ConnectionState : string){
    let networkType = this.network.type;
      this.toast.create({
       message: `You are now connected ${ConnectionState} via ${networkType}`,
       duration : 5000 
      }).present();
  }

  ionViewWillEnter(){
    let that = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if(user == null){
        
              }else{
              
                
                that.navCtrl.setRoot(UserMenuPage);
              }
    })
  
  }
ionViewDidEnter(){
  Keyboard.disableScroll(true);
 
 
  this.network.onConnect().subscribe(data => {
    this.displayNetworkUpdate(data.type);
  }), error => console.log(error);


  this.network.onDisconnect().subscribe(data =>{ 
    this.displayNetworkUpdate(data.type);
  }), error => console.log(error);

}

SignUp(){
  this.navCtrl.setRoot(RegisterPage);
}


// ==========================SHOWING ALERT POPUPS=======================================//
// Creating function that have a parameter of message which is string
alert(message:string){
  // create a variable that create an alert popup
  let alert = this.alrt.create({
    // this popup have title
        title:"Info!",
        // this popup have some subtitle which is message
        subTitle: message,
        // this popup have a button which is OK
        buttons: ['OK']
        // This popup is present
      }).present();
  }
//======================================================================================//


// =======================USER AUTHENTICATION FIREBASE==================================//
// User Login Authentication
 
login(user :User){

  // SIGN in in firebase using typed email and password
          firebase.auth().signInWithEmailAndPassword(user.email,user.password)
          // then these data want to check if email is verified or not!
        .then(data => {
            // user also see alert popup message Success you are login
            this.alert('Welcome Back !');
            // then send user to the root Homepage
            this.navCtrl.setRoot(UserMenuPage);
          })
          //If Catching an error
      .catch(error => {
        // This error print the log
        console.log('got an error', error);
        // and have a alert popup
        this.alert(error.message);
               })
              
}

// ==========================================================================================// 

ResetPasswordPage(){
  this.navCtrl.push(ResetPasswordPage);
}


}

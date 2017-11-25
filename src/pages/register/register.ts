import  firebase  from 'firebase';


import { Keyboard } from 'ionic-native';

import { LoginPage } from './../login/login';
import { User } from './../../models/user';

import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild } from '@angular/core';
import { NavController, Loading , NavParams, AlertController,LoadingController, ToastController  } from 'ionic-angular';
// //Firebase Cloud
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

// import { profile } from '../../models/profile';
//Ionic Cloud
// import { Auth, IDetailedError, UserDetails } from '@ionic/cloud-angular';

@Component({
 
  templateUrl: 'register.html',
  
})
 

export class RegisterPage {
// =============================BACKGROUND IMAGES =====================================//
  backgrounds = [
    'assets/img/backgrounds/1.png',
    'assets/img/backgrounds/2.png',
    'assets/img/backgrounds/3.png',
    'assets/img/backgrounds/4.png'
  ];
//  ===================================================================================//
// =============================SETTING USER MODEL ===================================//
    user = {} as User;
//====================================================================================//


  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public toast : ToastController ,public navCtrl: NavController,public loadingCtrl : LoadingController ,public alertCtrl: AlertController, public navParams: NavParams) {
    Keyboard.disableScroll(true);
  }
// ==============================LOGIN PAGE DIRECTORY===================================//
login(){
  // This navCtrl have a root og loginPage
  this.navCtrl.setRoot(LoginPage);
}
// =====================================================================================//

// ==========================SHOWING ALERT POPUPS=======================================//
// Creating function that have a parameter of message which is string
alert(message:string){
  // create a variable that create an alert popup
  let alert = this.alertCtrl.create({
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
presentLoading() {
  this.loader = this.loadingCtrl.create({
    content: "Loading...",
    showBackdrop: true
  });
  this.loader.present();
}
// ============================FIREBASE AUTHENTICATION =================================//
// cREATING A USER
loader: Loading;  
CreateProfile(user : User){
  
  //Creating a User in Firebase Authentication
  
  firebase.auth().createUserWithEmailAndPassword(user.email , user.password)
  // then this authentication is to save in Firebase Database
  .then( auth => {
    this.presentLoading();
    // Saving profile in Firebase Database
      this.afDatabase.object(`profile/${auth.uid}`).set(this.user);
      
      this.loader.dismiss();
      // If the user is created then show alert message "You account has been created"; 
    
})
      // Catching an error if its not create an account;
      .catch(error => {
        // Showing alert message! this message have an error 
      this.alert(error.message);
      })
}
GenderUserSelect:any;
Gender(){
  
}
ionViewWillLoad(){
  Keyboard.disableScroll(true);
}
}

//=======================================================================================//

//Etra ionic cloud cooding

//  email: string;
//   password: string;
//   name: string;

//Connecting with Google Cloud

//  register() {
//   this.fire.auth.createUserWithEmailAndPassword(this.UserEmail.value, this.UserPassword.value)
//   .then(data =>{
//       console.log('Got data' , data);
      
//   })
//   .catch(error =>{
//       console.log('Got an error ', error);
      
//     });

//     console.log('Would register with user ', this.UserEmail.value , this.UserPassword.value);
    

// }




  // Connrcting with ionic cloud

//   ShowAlert(){
//     let alrt = this.alertCtrl.create({
//       title:"Alert",
//       subTitle: "Already have an account please register!",
//       buttons : ['OK']
//     });
//     alrt.present();
//   }


//   register() {

//     let loader = this.loadingCtrl.create({
//       content: "Signing you up..."
//     });
//     loader.present();

//     setTimeout(() => {
//       loader.dismiss();
//     }, 5000);

      
//     let details : UserDetails = {
//         'email': this.email,
//         'password': this.password
//         ,'name': this.name
//     }


//     this.auth.signup(details).then((res)=>{
//       loader.dismiss();
       
//  //toast notifier
//       let toast = this.toast.create({
//           message: "Creating User Account...",
//           duration: 1000,
          
//       });
//         toast.present();

//       let alert = this.alertCtrl.create({
        
//         title: 'Congragulations',
//         subTitle: 'You have Successfully SignUp please login you account!',
//         buttons:['OK']
//       });
//       alert.present();

//     },(err: IDetailedError<string[]>)=>{
//         loader.dismiss();
//         var error_message = '';
//         for(let e of err.details){
//           if(e === 'conflict email'){
//           error_message += 'Email already exists. <br>';
//         } else {
//           error_message += 'Invalid credientals. <br>';
//         }
      
//       }

//       let alert = this.alertCtrl.create({
//         title : error_message,
//         subTitle: 'Please try again',
//         buttons : ['OK']
//       });
//         alert.present();
//     })
//   }
import { EmailVerificationPage } from './../email-verification/email-verification';
import { LoginPage } from './../login/login';
import { User } from './../../models/user';
import { CustomDesignsPage } from './../custom-designs/custom-designs';
import { FreeEmbroideryPage } from './../free-embroidery/free-embroidery';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController ,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { AngularFireDatabase, FirebaseObjectObservable,  } from 'angularfire2/database';
import  firebase  from 'firebase'; 

@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  constructor(public InAppBrowser: InAppBrowser,public AlertController:AlertController,public toast :ToastController,public afDatabase : AngularFireDatabase,public afAuth : AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }



  data:any;
  
  // This section cover display data
    profileData: FirebaseObjectObservable<User>;
    public UserProfile:any;

    ionViewWillLoad(){
     


      if(firebase.auth().currentUser.emailVerified == false){
        
        // then goes to verification page
        var that = this;
        // creating a variable that have a current authenticated user
        var users = firebase.auth().currentUser;
        // this user have a send email verification link then this function
            users.sendEmailVerification().then(function() {
                // this function push the email Verification page
                        that.navCtrl.push(EmailVerificationPage);
                        // catching an error if is't working
                        }).catch(error => {
                          // printing an error in console log
                          console.log(error);
                        })
      }

     
      this.UserProfile = firebase.database().ref('profile');
     firebase.auth().onAuthStateChanged((data) =>{
      this.profileData = this.afDatabase.object(`profile/${data.uid}`);
      
     })    
        }
  

       
  FreeEmbroidry()
  {
    this.navCtrl.push(FreeEmbroideryPage);
  }
  CustomDesigns(){
    this.navCtrl.push(CustomDesignsPage);
  }

}

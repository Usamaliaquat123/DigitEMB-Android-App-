import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import  firebase  from "firebase";
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-feedback-users',
  templateUrl: 'feedback-users.html',
})
export class FeedbackUsersPage {
  FeedBackOfUser : any;
  constructor(public afAuth: AngularFireAuth,public toast: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  SendFeedBack(){
    if(this.FeedBackOfUser == null){

    }else{
      firebase.auth().onAuthStateChanged((data)=>{
        firebase.database().ref(`feedback${data.uid}`).set({
          Sender_Email : data.email,
          Sender_Message : this.FeedBackOfUser, 
        });
        this.toast.create({
          message:'Thanks for your feedback...',
          duration: 5000,
          position: 'top'
        }).present();
      })
    

  }
  }

}

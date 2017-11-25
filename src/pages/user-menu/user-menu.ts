import { FeedbackUsersPage } from './../feedback-users/feedback-users';
import { CustomFormShowerPage } from './../custom-form-shower/custom-form-shower';
import { VectorFormComponent } from './../../components/vector-form/vector-form';
import { DigitizingFormComponent } from './../../components/digitizing-form/digitizing-form';
import { VerificationProcessPage } from './../verification-process/verification-process';
import { FreeVectorDesignsPage } from './../free-vector-designs/free-vector-designs';
import { VectorPageCustomPage } from './../vector-page-custom/vector-page-custom';
import { CustomDesignsPage } from './../custom-designs/custom-designs';
import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AccountSettingsPage } from './../account-settings/account-settings';
import { HomepagePage } from './../homepage/homepage';

import firebase from 'firebase';
import { User } from './../../models/user';

import { Component, ViewChild, OnInit, Renderer , NgZone } from '@angular/core';
import { NavController, NavParams ,AlertController, LoadingController ,Loading} from 'ionic-angular';

@Component({
 
  templateUrl: 'user-menu.html',
})
export class UserMenuPage implements OnInit {
  accordianExpanded = false;
  UserDataPicture:any;
    @ViewChild("cc") cardContent: any;
    @ViewChild("freeDesigns") freeDesigns: any;
    @ViewChild('CustomOrders') order:any;
    CoverImage: any;
    StorageRef = firebase.storage().ref();
    UpdateProfileImage : any;
    UpdatedLocalUserCoverImage : any;
  constructor(public afDatabase : AngularFireDatabase,public afAuth : AngularFireAuth,public zone : NgZone,private load: LoadingController, public AlertController:AlertController,public renderer: Renderer,public navCtrl: NavController, public navParams: NavParams) {
    
  
   
  }


  ngOnInit(){
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement,'webkitTransition','max-height 500ms, padding 500ms');
    this.renderer.setElementStyle(this.freeDesigns.nativeElement,'webkitTransition','max-height 500ms, padding 500ms');
    this.renderer.setElementStyle(this.order.nativeElement,'webkitTransition','max-height 500ms, padding 500ms');
  }
  toggleAccordian(){
    if(this.accordianExpanded ){
      this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "hidden");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "0px 16px");
    }else{
      this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "visible");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "13px 16px");
    }
    this.accordianExpanded = !this.accordianExpanded;
  }
  FreeDesigns(){
    if(this.accordianExpanded ){
      this.renderer.setElementStyle(this.freeDesigns.nativeElement,"visibility", "hidden");
      this.renderer.setElementStyle(this.freeDesigns.nativeElement,"max-height", "0px");
      this.renderer.setElementStyle(this.freeDesigns.nativeElement,"padding", "0px 16px");
    
    }else{
      this.renderer.setElementStyle(this.freeDesigns.nativeElement,"visibility", "visible");
      this.renderer.setElementStyle(this.freeDesigns.nativeElement,"max-height", "500px");
      this.renderer.setElementStyle(this.freeDesigns.nativeElement,"padding", "13px 16px");
    }
    this.accordianExpanded = !this.accordianExpanded;
  }
  
  Orders(){
    if(this.accordianExpanded ){
      this.renderer.setElementStyle(this.order.nativeElement,"visibility", "hidden");
      this.renderer.setElementStyle(this.order.nativeElement,"max-height", "0px");
      this.renderer.setElementStyle(this.order.nativeElement,"padding", "0px 16px");
    
    }else{
      this.renderer.setElementStyle(this.order.nativeElement,"visibility", "visible");
      this.renderer.setElementStyle(this.order.nativeElement,"max-height", "500px");
      this.renderer.setElementStyle(this.order.nativeElement,"padding", "13px 16px");
    }
    this.accordianExpanded = !this.accordianExpanded;
  }







  rootPage = HomepagePage;
  logout(){
    firebase.auth().signOut();

   this.navCtrl.setRoot(LoginPage);
}
data:any;

// This section cover display data
  profileData: FirebaseObjectObservable<User>;
  public UserProfile:any;


  ionViewWillEnter(){
firebase.auth().onAuthStateChanged((data) => {
  if(this.StorageRef.child(`UsersCoverPhoto/${data.uid}`) || this.StorageRef.child(`ProfilePhotos/${data.uid}`)){
    this.StorageRef.child(`UsersCoverPhoto/${data.uid}/UserCover.png`).getDownloadURL().then((url) => {
      this.zone.run(() => {
        console.log(url);
        this.UpdatedLocalUserCoverImage = url;
      })
  });
  // Getting Profile picture If available
  this.StorageRef.child(`ProfilePhotos/${data.uid}/UserProfile.png`).getDownloadURL().then((url) => {
    this.zone.run(() => {
      console.log(url);
      this.UpdateProfileImage = url;
    });
  });
   }else{
      //  Getting Cover Photo in firebase;
     
   } 
})

  }
ionViewWillLoad(){
  // let user = this.afAuth.auth.currentUser;
  
  // if (user) {
    
  // } else {
  //   // No user is signed in.
  // }
  // this.afAuth.authState.subscribe(data => {
  //   this.afDatabase.database.ref(`/profile/${data.uid}`).set({
  //    FirstName : data.displayName,
  //    email : data.email,
  //    Profile : data.photoURL,
  //   });
  // })





   
      this.UserProfile = firebase.database().ref('profile');
      firebase.auth().onAuthStateChanged((data) => {
        this.profileData = this.afDatabase.object(`profile/${data.uid}`);
      })
     



        
}




// External links


FreeEmbroideryDesigns(){
  this.navCtrl.push(HomepagePage);
}

freeVectorDesigns(){
  this.navCtrl.push(FreeVectorDesignsPage);
}
AccountSettings(){
  this.navCtrl.push(AccountSettingsPage);
}
VerificationProcess(){
  this.navCtrl.push(VerificationProcessPage);
}
VectorForm(){
  this.navCtrl.push(VectorPageCustomPage);
}
  
DigitizeOrder(){
  this.navCtrl.push(CustomFormShowerPage);
}
FeedBackUser(){
  this.navCtrl.push(FeedbackUsersPage);
}
}



import { Component, ViewChild, OnInit, Renderer ,NgZone} from '@angular/core';
import { NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { storage } from 'firebase';
import { Camera } from 'ionic-native';
import firebase from 'firebase';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from './../../models/user';
@Component({
  
  templateUrl: 'account-settings.html',
})
export class AccountSettingsPage implements OnInit{
StorageRef = firebase.storage().ref();
UpdatedCoverImage :any;
UpdateProfileImage : any;
  constructor(public zone : NgZone,public ToastController : ToastController ,public renderer: Renderer , public AlertController:AlertController,private afAuth: AngularFireAuth , public afDatabase : AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
    this.myPhotosRef = firebase.storage().ref('/UsersCoverPhoto/');
    this.myPhotosRefProfile = firebase.storage().ref('/ProfilePhotos/');

  // This Method should run in running process


  firebase.auth().onAuthStateChanged((data) => {

          //  Getting Cover Photo in firebase;
          this.StorageRef.child(`UsersCoverPhoto/${data.uid}/UserCover.png`).getDownloadURL().then((url) => {
            this.zone.run(() => {
              console.log(url);
              this.UpdatedCoverImage = url;
            });
        });
        // Getting Profile picture If available
        this.StorageRef.child(`ProfilePhotos/${data.uid}/UserProfile.png`).getDownloadURL().then((url) => {
          this.zone.run(() => {
            console.log(url);
            this.UpdateProfileImage = url;
          });
        });
  })
  
  
  }
  //Catching Database


  UpdatePass:any;
  popMessage:any;
  UpdatedImage: any;
 @ViewChild('hideSaveEmail') hideEmail;
 @ViewChild('popOver') PopOver;
  ngOnInit(){

  }
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// ==========================================Updating Profile Picture==================
public myPhotosRef: any;
public myPhoto: any;
public myPhotoURL: any;
takePhoto() {
  Camera.getPicture({
    quality: 100,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    encodingType: Camera.EncodingType.PNG,
    targetHeight : 370,
    targetWidth : 600,
    saveToPhotoAlbum: true
  }).then(imageData => {
    this.myPhoto = imageData;
    this.uploadPhoto();
  }, error => {
    console.log("ERROR -> " + JSON.stringify(error));
  });
}

selectPhoto(): void {
  Camera.getPicture({
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: Camera.DestinationType.DATA_URL,
    quality: 100,
    targetHeight : 370,
    targetWidth : 600,
  }).then(imageData => {
    
    this.myPhoto = imageData;
    this.uploadPhoto();
  }, error => {
    console.log("ERROR -> " + JSON.stringify(error));
  });
}

private uploadPhoto(): void {
  firebase.auth().onAuthStateChanged((data) => {
    this.myPhotosRef.child(data.uid).child('UserCover.png')
    .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
    .then((savedPicture) => {
      this.myPhotoURL = savedPicture.downloadURL;
    });  
  })
 
  
}


// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// Profile Picture

public myPhotosRefProfile: any;
public myPhotoProfile: any;
public myPhotoURLProfile: any;
takePhotoProfile() {
  Camera.getPicture({
    quality: 100,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.CAMERA,
    encodingType: Camera.EncodingType.PNG,
    saveToPhotoAlbum: true,
    targetHeight : 600,
    targetWidth  : 600,
  }).then(imageData => {
    this.myPhotoProfile = imageData;
    this.uploadPhotoProfile();
  }, error => {
    console.log("ERROR -> " + JSON.stringify(error));
  });
}

selectPhotoProfile(): void {
  Camera.getPicture({
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: Camera.DestinationType.DATA_URL,
    quality: 100,
    targetHeight : 600,
    targetWidth  : 600,
  }).then(imageData => {
    
    this.myPhotoProfile = imageData;
    this.uploadPhotoProfile();
  }, error => {
    console.log("ERROR -> " + JSON.stringify(error));
  });
}

private uploadPhotoProfile(): void {

  firebase.auth().onAuthStateChanged((data) => {
    this.myPhotosRefProfile.child(data.uid).child('UserProfile.png')
    .putString(this.myPhotoProfile, 'base64', { contentType: 'image/png' })
    .then((savedPicture) => {
      this.myPhotoURLProfile = savedPicture.downloadURL;
    });  
  })
  
  
}

// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// Methods of Calling alert

SelectYourMethodToUploadCover(){
  this.AlertController.create({
    title : 'Upload Methods',
    buttons :[
    {
     text : 'Take Photo',
     handler : () =>{
       this.takePhoto();
     } 
    },{
      text : 'Gallery',
      handler : () => {
        this.selectPhoto();
      }
    }]
  }).present();
}

SelectYourMethodToUploadProfile(){
  this.AlertController.create({
    title : 'Upload Methods',
    buttons :[
    {
     text : 'Take Photo',
     handler : () =>{
       this.takePhotoProfile();
     } 
    },{
      text : 'Gallery',
      handler : () => {
        this.selectPhotoProfile();
      }
    }]
  }).present();
}


// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################
// #####################################################################################

// ====================================================================================
//==========================================VerifyEmail
Password:string;
CurrentEmail : string;
UpdateEmail:string;
VerifyEmail(Email){
    // if(this.UpdateEmail == ''){
    //   console.log('Hello Wordl');
    //   }
    
      if(this.UpdateEmail == ''){
        let alert = this.AlertController.create({
          title: 'Please fill credientials  ',
          message: 'Please fill credientials than we can continue'
        }).present();
      }else{
        firebase.auth().onAuthStateChanged((data) => {
          this.CurrentEmail = data.email
          let alert = this.AlertController.create({
                title : 'Enter Your password',
                message : 'Type your current password',
                inputs : [
                  {
                      name : 'Password',
                      placeholder : 'Enter your current password',
                      type : 'password',
                  }
                ],
                buttons : [
                  {
                    text : 'Update Your Email ',
                    handler : dataa => {
                      this.Password = dataa.Password;    
                    
                      firebase.auth().signInWithEmailAndPassword(this.CurrentEmail,this.Password).then(data => {
                       firebase.auth().onAuthStateChanged((data) =>{ 
                        data.updateEmail(this.UpdateEmail);
                        let that = this;
                        data.sendEmailVerification().then(function(){
                         //  that.navCtrl.push(EmailVerificationPage);
                        })
                       })
                           
                      })
                    }
                  }
                ]
                
          }).present();
    
          
        })
 }
    
  }

  UpdatePassword(){
    if(this.UpdatePass == ''){
      let alert = this.AlertController.create({
        title: 'Please fill credientials  ',
        message: 'Please fill credientials than we can continue'
      }).present();
    }else{
      firebase.auth().onAuthStateChanged((data) =>{
        this.CurrentEmail = data.email
        let alert = this.AlertController.create({
              title : 'Enter Your current password',
             inputs : [
                {
                    name : 'Password',
                    placeholder : 'Enter your current password',
                    type : 'password',
                }
              ],
              buttons : [
                {text : 'Update Your Email ',
                  handler : dataa => {
                    this.Password = dataa.Password;    
                  firebase.auth().signInWithEmailAndPassword(this.CurrentEmail,this.Password).then(data => {
                   firebase.auth().onAuthStateChanged((data) => {
                    data.updatePassword(this.UpdatePass);
                    firebase.database().ref('')
                     this.ToastController.create({
                       message : 'Success! Password Successfully Updated',
                       duration: 3000,
                       position : 'top',
                     }).present();
                   })
                   
                    })
                  }
                }
              ]
              
        }).present();
      })

  }
  }
  //========================================Updating Name

  UpdatePhoneNumber : any;
  UpdateContactNumber(){
    firebase.auth().onAuthStateChanged((data) => {
      firebase.database().ref('profile/'+ data.uid).update({
        PhoneNumber : this.UpdatePhoneNumber,
      }).then(info => {
        this.ToastController.create({
          message : info,
          duration: 3000,
          position : 'top',
        })
      })
    })
   
  }
  UpdatedName:any;
  UpdateFullName(FirstName){
    if(this.UpdatedName == ''){
        let alert = this.AlertController.create({
          title : 'Enter Valid Name',
          message : 'Type valid name then save'
        }).present();
    }
    firebase.auth().onAuthStateChanged((data) =>{
      
      firebase.database().ref('profile/' + data.uid).update({
        FirstName: this.UpdatedName, //User Updated Email
       });
       this.popMessage = 'Success! Your Name Succesfully Updated..';
       this.renderer.setElementStyle(this.PopOver.nativeElement,"opacity", "1");
       this.renderer.setElementStyle(this.PopOver.nativeElement,"transition", "opacity 2s linear");
       this.renderer.setElementStyle(this.PopOver.nativeElement,"visibility", "visible");
        
    })

  }




data:any;

// This section cover display data
  profileData: FirebaseObjectObservable<User>;
  public UserProfile:any
  ionViewWillLoad(){
    this.UserProfile = firebase.database().ref('profile');
    firebase.auth().onAuthStateChanged((data) => {
      this.data = data;
      
    if(data.email && data.uid){

        this.profileData = this.afDatabase.object(`profile/${data.uid}`);
       }else{}
    })
  
     
  }

  
}

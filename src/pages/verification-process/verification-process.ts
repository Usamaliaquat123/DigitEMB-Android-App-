import { Component ,ViewChild,OnInit, Renderer  } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase,  FirebaseObjectObservable} from 'angularfire2/database';
import { User } from './../../models/user';


@Component({
  selector: 'page-verification-process',
  templateUrl: 'verification-process.html',
})
export class VerificationProcessPage implements OnInit {

  constructor(public renderer: Renderer,private toast : ToastController ,private afAuth: AngularFireAuth,private afAuthDatabase: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){

  }
  @ViewChild('VerifyEmail') email;
  @ViewChild('SignEmail') SignEmail;
  accordianExpanded = false;
  emailOfDtabase:any;
  CheckVerification:any;

public UserProfile:any;
  profileData: FirebaseObjectObservable<User>
  ionViewWillLoad(){
    this.UserProfile = firebase.database().ref('profile');
    firebase.auth().onAuthStateChanged((data) => {
      if(firebase.auth().currentUser.emailVerified == false){
        this.CheckVerification = 'Not Verified';
        this.renderer.setElementStyle(this.email.nativeElement,"color", "#FF4741");
      }else{
        this.CheckVerification = 'Verified';
        this.renderer.setElementStyle(this.email.nativeElement,"color", "#32DB64");
        this.renderer.setElementStyle(this.SignEmail.nativeElement,"color", "#32DB64");
      }
      if(data.email && data.uid){
        this.profileData = this.afAuthDatabase.object(`profile/${data.uid}`);
       }
      else{
         }
      this.emailOfDtabase = data.email;
    })
     
    }
    

}

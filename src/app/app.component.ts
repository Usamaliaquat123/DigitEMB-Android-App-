import { VectorFormComponent } from './../components/vector-form/vector-form';
import { FeedbackUsersPage } from './../pages/feedback-users/feedback-users';

import { FreeEmbroideryPage } from './../pages/free-embroidery/free-embroidery';
import { CustomDesignsPage } from './../pages/custom-designs/custom-designs';
import { EmailVerificationPage } from './../pages/email-verification/email-verification';
import { AccountSettingsPage } from './../pages/account-settings/account-settings';
import { HomepagePage } from './../pages/homepage/homepage';
import { UserMenuPage } from './../pages/user-menu/user-menu';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from 'ionic-native';

import  firebase  from 'firebase'; 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  
  rootPage:any = LoginPage;

  constructor(public alert : AlertController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      Keyboard.disableScroll(true);
        });

  }


  

 
}


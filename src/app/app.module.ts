import { FeedbackUsersPage } from './../pages/feedback-users/feedback-users';
import { VerificationProcessPage } from './../pages/verification-process/verification-process';


import { FreeVectorDesignsPage } from './../pages/free-vector-designs/free-vector-designs';
import { ResetPasswordPage } from './../pages/reset-password/reset-password';
import { VectorPageCustomPage } from './../pages/vector-page-custom/vector-page-custom';
import { CustomFormShowerPage } from './../pages/custom-form-shower/custom-form-shower';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';
import { ModalPopupPage } from './../pages/modal-popup/modal-popup';
import { EmailVerificationPage } from './../pages/email-verification/email-verification';
import { EmailComposer } from '@ionic-native/email-composer';
import { DigitEmpApiProvider } from './../providers/digit-emp-api/digit-emp-api';
import { AccountSettingsPage } from './../pages/account-settings/account-settings';
import { Network } from '@ionic-native/network';
import { VectorFormComponent } from './../components/vector-form/vector-form';
import { DigitizingFormComponent } from './../components/digitizing-form/digitizing-form';
import { UserMenuPage } from './../pages/user-menu/user-menu';
import { CustomDesignsPage } from './../pages/custom-designs/custom-designs';
import { FreeEmbroideryPage } from './../pages/free-embroidery/free-embroidery';
import { HomepagePage } from './../pages/homepage/homepage';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule,Http } from '@angular/http';
import { MyApp } from './app.component';
import { SMS } from '@ionic-native/sms';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
//Google Cloud Database module firebase
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// Importing firebase Objects

import firebase from 'firebase';
import { Camera, Keyboard } from 'ionic-native';

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "MESSAGING SENDER ID"
});

const  FIREBASE_CONFIGe = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "MESSAGING SENDER ID"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomepagePage,
    FreeEmbroideryPage,
    CustomDesignsPage,
    UserMenuPage,
    DigitizingFormComponent,
    VectorFormComponent,
    AccountSettingsPage,
    EmailVerificationPage,
    CustomFormShowerPage, 
    VectorPageCustomPage,
    ResetPasswordPage,
    FreeVectorDesignsPage,
    VerificationProcessPage,
    ModalPopupPage,
    FeedbackUsersPage
    

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIGe),
    HttpModule,
    // AngularFireAuthModule,
    //Conntecting with Database firebase but i am using google auth service already
    // AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomepagePage,
    FreeEmbroideryPage,
    CustomDesignsPage,
    UserMenuPage,
    DigitizingFormComponent,
    VectorFormComponent,
    AccountSettingsPage,
    EmailVerificationPage,
    CustomFormShowerPage,
    VectorPageCustomPage,
    ResetPasswordPage,
   FreeVectorDesignsPage,
   VerificationProcessPage,
    ModalPopupPage,
    FeedbackUsersPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    SMS,
    Camera,
    DigitEmpApiProvider,
    EmailComposer,
    Facebook,
    Keyboard,
    InAppBrowser
  ]
})
export class AppModule {}

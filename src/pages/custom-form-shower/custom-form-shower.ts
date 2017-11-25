import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-custom-form-shower',
  templateUrl: 'custom-form-shower.html',
})
export class CustomFormShowerPage {
  CustomPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.CustomPage = this.navParams.data;
   console.log(this.CustomPage);
   
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-popup',
  templateUrl: 'modal-popup.html',
})
export class ModalPopupPage {
  data : any;
  constructor(public navCtrl: NavController, private view : ViewController,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPopupPage');
  }

  ionViewWillLoad(){
    const data =  this.navParams.data;
    this.data = data;
   }

  close(){
    this.navCtrl.pop();
  }
}

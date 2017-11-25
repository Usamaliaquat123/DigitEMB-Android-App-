import { ModalPopupPage } from './../modal-popup/modal-popup';
import { DigitEmpApiProvider } from './../../providers/digit-emp-api/digit-emp-api';

import { Component } from '@angular/core';
import { IonicPage, NavController ,ModalController, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the FreeVectorDesignsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-free-vector-designs',
  templateUrl: 'free-vector-designs.html',
})
export class FreeVectorDesignsPage {

  data : any;
  pagination : number = 1;
  searchKeyword : string = "";
    searchType: boolean = false;
   title: string = '';
   loader: Loading;
  constructor(public navCtrl: NavController,public modal:ModalController, public LoadingController: LoadingController,public DigitEmbProvider:DigitEmpApiProvider) {

    this.presentLoading();
    this.DigitEmbProvider.categorieVector(1).subscribe(data => {
      this.loader.dismiss();
        this.data = data;
      });

  }
 
  catcontent($event, datas){
    this.navCtrl.setRoot(ModalPopupPage, datas);
  }
  presentLoading(){
    this.loader = this.LoadingController.create({
      content: "Loading...",
      showBackdrop: true
    });
    this.loader.present();
  }

  onCencel(ev){
    if(!ev.target.value){
      
      this.DigitEmbProvider.categorieVector(1).subscribe(data => {
        this.data = data;
        this.searchType = false;
      })
    }
  }
  
  doInfinite(ev){
    this.pagination ++;
    try{
    this.DigitEmbProvider.categorieVector(this.pagination).subscribe(data => {
     
      ev.complete();
            if(data.length !== 0){
              for(let i of data){
                this.data.push(i);
              }
            }else{
              console.log('posts are ended');
            }
    })}catch(err){
      console.log(err);
      
    }
  }

}

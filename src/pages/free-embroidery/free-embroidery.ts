import { ModalPopupPage } from './../modal-popup/modal-popup';
import { DigitEmpApiProvider } from './../../providers/digit-emp-api/digit-emp-api';
import { Http } from '@angular/http';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams , Loading , LoadingController, ModalController} from 'ionic-angular';


@Component({
  selector: 'page-free-embroidery',
  templateUrl: 'free-embroidery.html',
})
export class FreeEmbroideryPage {
  data : any;
  pagination : number = 1;
  
  searchKeyword : string = "";
    searchType: boolean = false;
   title: string = '';

   @ViewChild('overlayContent') overlayContent;
   @ViewChild('close') close;
   loader: Loading;  
  constructor(public navCtrl : NavController, private load: LoadingController,private modal : ModalController ,public http: Http,public DigitEmbApi:DigitEmpApiProvider) {
    this.presentLoading();
    this.DigitEmbApi.category(1).subscribe(data => {
      this.loader.dismiss();
        this.data = data;
    });
    
  }

  presentLoading() {
    this.loader = this.load.create({
      content: "Loading...",
      showBackdrop: true
    });
    this.loader.present();
  }

  catcontent($event, datas){
    this.navCtrl.push(ModalPopupPage, datas);
  }

  search(keyword){
    this.searchType = true;
    this.DigitEmbApi.search(keyword,1).subscribe(data=>{
        this.data = data; 
    });
  }

  onCencel(ev){
    if(!ev.target.value){
      
      this.DigitEmbApi.category(1).subscribe(data => {
        this.data = data;
        this.searchType = false;
      })
    }
  }
  
  doInfinite(ev){
    this.pagination ++;
    try{
    this.DigitEmbApi.category(this.pagination).subscribe(data => {
     
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

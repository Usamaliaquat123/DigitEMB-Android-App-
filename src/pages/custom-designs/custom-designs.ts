import { VectorPageCustomPage } from './../vector-page-custom/vector-page-custom';
import { CustomFormShowerPage } from './../custom-form-shower/custom-form-shower';
import { SMS } from '@ionic-native/sms';
import { Component, Renderer, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';




@Component({
  selector: 'page-custom-designs',
  templateUrl: 'custom-designs.html',
})
export class CustomDesignsPage implements OnInit {
  // @ViewChild("cc") cardContent: any;
  // @ViewChild("DigitizingForm") DigitizingForm: any;
  // @ViewChild('VectorForm') VectorForm: any;
  // accordianExpanded = false;
  constructor(public renderer : Renderer,public alrt : AlertController,public sms :SMS,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ngOnInit(){
  //   console.log(this.cardContent.nativeElement);
  //   this.renderer.setElementStyle(this.cardContent.nativeElement,'webkitTransition','max-height 500ms, padding 500ms');
  // }
  }



//   toggleAccordian(){
//     if(this.accordianExpanded ){
//       this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "hidden");
//       this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "0px");
//       this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "0px 16px");

//     }else{
//       this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "visible");
//       this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "500px");
//       this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "13px 16px");
//     }
//     this.accordianExpanded = !this.accordianExpanded;
//   }
// // Setting up Show and off Forms
//   value: any;
//   ShowDigitizing(){
//     this.value = 1;
    
//   }
//   ShowVector(){
//       this.value = 0;
//   }


DigitizingDesigns(){
  this.navCtrl.push(CustomFormShowerPage);
}


VectorFormDesigns(){
  this.navCtrl.push(VectorPageCustomPage);
}


}

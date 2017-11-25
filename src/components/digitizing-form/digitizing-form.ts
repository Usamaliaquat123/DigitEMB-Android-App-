import { AlertController, ToastController } from 'ionic-angular';
import { Component, Renderer, ViewChild, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'digitizing-form',
  templateUrl: 'digitizing-form.html'
})
export class DigitizingFormComponent implements OnInit {

  text: string;
  UsersDigitizingMessage : any;
  UserSelectedformat :any;
  UserSelectedOtherFormat :any;
  DesignName : any;
  @ViewChild('HideElementsOfFormatSize') cardContent;
  @ViewChild('ShowOtherFormatTextBox') OtherFormatTextBox;
  accordianExpanded = false;

  WidthOfFormat : any;
  HeightOfFormat :any;
  OtherFormatTextBoxValues : any



  constructor(public toast:ToastController, public alrt : AlertController,public renderer :  Renderer, public network : Network, public EmailComposer: EmailComposer) {
  
  }

  ngOnInit(){
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement,'webkitTransition','max-height 500ms, padding 500ms');
    this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement,'webkitTransition','max-height 500ms, padding 500ms');
  }


  // If User Selected Format Size Options
  public optionsFn(): void {
   
      if(this.UserSelectedformat == 'cm' || this.UserSelectedformat == 'Inch' || this.UserSelectedformat == 'HoopSize'){
        this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "visible");
        this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "300px");
        this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "13px 16px");
      }else{
          this.renderer.setElementStyle(this.cardContent.nativeElement,"visibility", "hidden");
          this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height", "0px");
          this.renderer.setElementStyle(this.cardContent.nativeElement,"padding", "0px 16px");
    }

 this.accordianExpanded = !this.accordianExpanded;
  }




  // If User Selected Other Format
  OtherFormat(){
   if(this.UserSelectedOtherFormat == 'OtherFormat'){
    this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement,"visibility", "visible");
    this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement,"max-height", "300px");
    this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement,"padding", "13px 16px");
  }else{
    this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement,"visibility", "hidden");
    this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement,"max-height", "0px");
    this.renderer.setElementStyle(this.OtherFormatTextBox.nativeElement,"padding", "0px 16px");

  }
  }

  SendEmailInDigitizingForm(){


      var NameDesign = this.DesignName;
      var Sizeformat = this.UserSelectedformat; var height = this.HeightOfFormat; var Width = this.WidthOfFormat;
      var Message = this.UsersDigitizingMessage;
      var FileTypeFormat = this.UserSelectedOtherFormat;
      var OtherFormatTextValue = this.OtherFormatTextBoxValues;
  
  
      console.log(this.UserSelectedOtherFormat);
      let email = {
        to: 'Digitize@digitemb.com',
        cc: 'marketing@digitemb.com',
        attachments: [],
        subject: 'Congratulations You Recieved New Digitizing Order!',
        body: '<p class="EmailComposerOfDigitizing">I want to digitize agreeable design(s) as per my own requirements!</p> <br>' + '<b>1. Design Name :</b> '+ NameDesign + '<br><b>2. Size : </b>'+ Sizeformat +'<b><br>3. Width :</b> '+ Width + '<b> Heght :</b> ' + height + '<br><b>4. File Type :</b> '+ FileTypeFormat + '<br><b>User Typed Other Format :  </b></br>' + OtherFormatTextValue + '<br><b>5. Message :</b> '+ Message +'<br><br>This email was sent from DigitEMB Free Designs App<br>',
        isHtml: true
      };
      this.EmailComposer.open(email).then(data => {
        this.toast.create({
          message: 'Your Request has been successfully sent, we will conatct you soon!',
          position: 'top',
          duration : 3000,
          cssClass: "EmailComposerOfDigitizingtoast",
        }).present();
      })
     }


    



  }


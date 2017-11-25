import { ToastController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';

/**
 * Generated class for the VectorFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'vector-form',
  templateUrl: 'vector-form.html'
})
export class VectorFormComponent {
  DesignName:any;
  text: string;
  UserVectorMessage : any;
  FormatsValue:any;
  constructor( public EmailComposer : EmailComposer, public toast: ToastController) {
    console.log('Hello VectorFormComponent Component');
   
  }

  GetFormats(){
    
  }


  SendEmailVectorForm(){
    
    var NameDesign = this.DesignName;
    var Format  = this.FormatsValue;
    var Message = this.UserVectorMessage;
    
        let email = {
          to: 'Digitize@digitemb.com',
          cc: 'marketing@digitemb.com',
          attachments: [],
          subject: 'Congratulations You Recieved New Vector Order!',
          body: '<b>I want to vectorize agreeable design(s) as per my own requirements!</b><br> <br>' + '<b>1. Design Name :</b> '+ NameDesign + '<br><b>2. File Type :</b> '+ Format + '<br><b>3. Message : </b>'+ Message + '<br><br>' +'<br><br>This email was sent from DigitEMB Free Designs App<br>',
          isHtml: true
        };
        this.EmailComposer.open(email).then(data => {
          this.toast.create({
            message: 'Your Request has been successfully sent, we will conatct you soon!',
            position: 'top',
            duration : 3000,
          }).present();
        });
      }
}

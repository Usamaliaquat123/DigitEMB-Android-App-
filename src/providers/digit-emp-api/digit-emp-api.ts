
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the DigitEmpApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DigitEmpApiProvider {

  constructor(public afAuth : AngularFireAuth,public afDatabase : AngularFireDatabase,public http: Http) {
    console.log('Hello DigitEmpApiProvider Provider');
  }
  index(id){

  }
  category(page){
    
   return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&categories=221&filter[order]=DESC&filter[posts_per_page]=5&page="+ page)
        .map(data => data.json());  
  }
  categorieVector(page){
    return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&categories=222&filter[order]=DESC&filter[posts_per_page]=5&page="+ page)
    .map(data => data.json());  
  }


  facebookApi(token){
    return this.http.get("https://graph.facebook.com/v2.10/me?fields=id%2Cname%2Cemail%2Cfirst_name%2Cpicture.width(720).height(720).as(picture_large)%2Ccover&access_token="+ token)
    .map(data => data.json());
  }


    search(keyword,id){
       return this.http.get("https://www.digitemb.com/wp-json/wp/v2/posts?_embed&filter[order]=DESC&filter[posts_per_page]=5&search=" + keyword + "&page="+id)
                    .map(data => data.json());
      }
}
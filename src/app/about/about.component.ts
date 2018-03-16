import { Component, OnInit } from '@angular/core';
import {Meta,Title} from '@angular/platform-browser'
import { HathService } from './../hath.service';
import { DomSanitizer } from '@angular/platform-browser';
import {sha512} from 'js-sha512'



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // obj = require('../../assets/js/techprocess.js');
  pageName = "mybill";
  salt="eCwWELxi"
//  paymentObj:Object={
//    key:String,
//   txnid:String,
//   amount:Number,
//   productinfo:String,
//   firstname:String,
//   email:String,
//   phone:String,
//   surl:String,
//   furl:String,
//   HASH: String

//  };
  seoResponse;
  test;
  paymentObj;
  mobileNo='9876543210';
  constructor(meta: Meta, title: Title, private api: HathService, public domSanitizer : DomSanitizer) {
    

    this.api.seoData(this.pageName).subscribe((data) => {
      console.log(data);
      this.seoResponse = data;
      console.log(this.seoResponse.meta_keywords);
      console.log(this.seoResponse);

      title.setTitle('My Bill Page');
      meta.addTags([
        { name: 'name', content: 'my bill page' },
        { name: 'keywords', content: this.seoResponse.meta_keywords },
        { name: 'description', content: this.seoResponse.meta_description },
        { property: 'og:title', content: this.seoResponse.og_title },
        { property: 'og:description', content: this.seoResponse.og_description },
        { property: 'og:url', content: this.seoResponse.og_url }
      ])

    });
this.seoResponse=this.api.seoCall(this.pageName); 

    }

  ngOnInit() {

    var script = document.createElement('script');
    script.src = "../assets/js/techprocess.js";
    document.body.appendChild(script);  
  
  }
  

  payment(firstname,b,c,d,f,g,h,i,j)
  {
    this.paymentObj =
    {
    key:d,
    txnid:g,
    amount:i,
    productinfo:h,
    firstname:firstname,
    email:j,
    phone:c,
    surl:b,
    furl:f,
   
    }
 
    var string = this.paymentObj["key"] + '|' + this.paymentObj["txnid"]  + '|' + this.paymentObj["amount"]  + '|' + this.paymentObj["productinfo"]  + '|' + this.paymentObj["firstname"]  + '|' + this.paymentObj["email"] +'|||||||||||'+this.salt;
    console.log(string)
    var HASH =sha512(string);
    console.log(HASH)
    var fd=new FormData();
    fd.append('key',d);
    fd.append('txnid', g);
    fd.append('amount',i);
    fd.append('productinfo',h);
    fd.append('firstname',firstname);
    fd.append('email',j);
    fd.append('phone',c);
    fd.append('surl',b);
    fd.append('furl',f);
    fd.append('HASH',HASH)
  console.log(fd)
this.api.payment(fd).subscribe(data=>{
  console.log(data);
//  window.location.href = data.url;
});
  }

  pay(firstname,b,c,d,f,g,h,i,j)
  {
   
    this.paymentObj =
    {
    key:d,
    txnid:g,
    amount:i,
    productinfo:h,
    firstname:firstname,
    email:j,
    phone:c,
    surl:b,
    furl:f,
   HASH:HASH
    }
    console.log(this.paymentObj["txnid"])
    var string = this.paymentObj["key"] + '|' + this.paymentObj["txnid"]  + '|' + this.paymentObj["amount"]  + '|' + this.paymentObj["productinfo"]  + '|' + this.paymentObj["firstname"]  + '|' + this.paymentObj["email"] +'|||||||||||'+this.salt;
    console.log(string)
    var HASH =sha512(string);
    console.log(HASH)
    var fd=new FormData();
    fd.append('key',d);
    fd.append('txnid', g);
    fd.append('amount',i);
    fd.append('productinfo',h);
    fd.append('firstname',firstname);
    fd.append('email',j);
    fd.append('phone',c);
    fd.append('surl', "http://192.168.15.75:8080/login");
    fd.append('furl',f);
    fd.append('HASH',HASH)
  console.log(fd)
  

}
}
export function compute(number)
{
    if(number < 0)
    return 0;

    return number +1;
}
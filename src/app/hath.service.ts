import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Meta, Title } from '@angular/platform-browser';
import { Configuration } from './config';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HathService {

  constructor(public httpClient: HttpClient, public meta: Meta, public title: Title, public urlObject: Configuration) { }
  checkFlag = true;
  //function to create temporary user
  //   createUser(form): Observable<any> {

  //     console.log(form)
  //     let headers = new Headers();
  //     headers.append('Content-Type', 'application/x-www-form-urlencoded')
  //     let options = new RequestOptions({ headers: headers });
  //     return this.httpClient.post(this.urlObject.UrlObj.createTempUserApi, form, options).map(data => { data.json()});
  // }

  sendOtp(type, input_value): Observable<any> {

    let loginObj =
      {
        "type": type,
        "input_value": input_value
      }

    return this.httpClient.post(this.urlObject.UrlObj.sendOtpApi, loginObj)
  }


  loginUser(otp, type, input_value, login_device): Observable<any> {
    let loginObject =
      {
        "type": type,
        "input_value": input_value,
        "otp": otp,
        "login_device": login_device

      }

    return this.httpClient.post(this.urlObject.UrlObj.loginApi, loginObject);

  }

  seoData(page_name) {
    let seoObject =
      {

        "page_name": page_name
      }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({ headers: headers });


    return this.httpClient.post(this.urlObject.UrlObj.seodetails, seoObject)

  }
  seoResponse;
  seoCall(page_name) {

    this.seoData(page_name).subscribe((data) => {
      console.log(data)
     

      this.seoResponse = data;
      console.log(this.seoResponse.meta_keywords);
      console.log(this.seoResponse);

      this.title.setTitle('My welcome Page');
      this.meta.addTags([
        { name: 'name', content: 'hathway.com' },
        { name: 'keywords', content: this.seoResponse.meta_keywords },
        { name: 'description', content: this.seoResponse.meta_description },
        { property: 'og:title', content: this.seoResponse.og_title },
        { property: 'og:description', content: this.seoResponse.og_description },
        { property: 'og:url', content: this.seoResponse.og_url }
      ])

    });

  }

  payment(paymentObj) {
    console.log("paying", paymentObj);
    let headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8')

    let options = new RequestOptions({ headers: headers });


    return this.httpClient.post(this.urlObject.UrlObj.paymentApi, paymentObj)




  }


  fetchBanner() {




    return this.httpClient.get(this.urlObject.UrlObj.bannerApi)

  }
  dataUsageObj;
  token;
  dataUsageDetail(fd) {

    return this.httpClient.post(this.urlObject.UrlObj.dataUsageApi, fd)
  }


  editMobile(editMob) {


    return this.httpClient.post(this.urlObject.UrlObj.changePhoneNoApi, editMob)
  }

  sendOtpNewMobile(newMobileNo, mobileNo) {
    let loginObj =
      {
        "new_registered_mobile_no": newMobileNo.toString(),
        "registered_mobile_no": mobileNo.toString(),
        "login_device": "web"
      }


    return this.httpClient.post(this.urlObject.UrlObj.changePhoneNoRequestApi, loginObj)
  }

  uploadImage(uploadImageObj) {

    return this.httpClient.post(this.urlObject.UrlObj.profilePictureApi, uploadImageObj)
  }

  sendOtpEmail(newEmail, email, registered_mobile_no) {
    let loginObj =
      {
        "new_email": newEmail,
        "email": email,
        "registered_mobile_no": registered_mobile_no.toString(),
        "login_device": "web"
      }
    return this.httpClient.post(this.urlObject.UrlObj.changeEmailRequestApi, loginObj)
  }

  editEmail(editMob) {
    return this.httpClient.post(this.urlObject.UrlObj.changeEmailApi, editMob)
  }

  bd;
lastbillpaymentdetail(){
this.bd = 
  {
    "customer_id" :"2",
    "registered_mobile_no":"9720761585",
    "login_device":"web"
  }
  return this.httpClient.post('http://192.168.15.75:8080/api/isp/v1/customer/getlastbillpaymentdetail',this.bd);
}
}


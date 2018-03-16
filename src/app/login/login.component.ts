import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { Directive, forwardRef, Attribute, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HathService } from './../hath.service';
import{HttpClient}  from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // resolved(captchaResponse: string) {
  //   console.log(`Resolved captcha with response ${captchaResponse}:`);
  // }


  errorMessage: string;
  flag = true;
  checkFlag = true;
  type = "registered_mobile_no";
  input_value = '';
  str: String;
  email: String;
  otp;
  login_device = "web";
  constructor(private route: Router, private api: HathService,private httpClient:HttpClient) {
    // this.timeConverter(this.UNIX_timestamp)
  }

  ngOnInit() {
    localStorage.clear();
  }
  createUser() {
    switch (this.type) {
      case "registered_mobile_no":
        if (this.input_value.length > 0) {
          if (!(/^[7-9][0-9]{9}$/.test(this.input_value))) {
            this.errorMessage = "Enter Valid Mobile Number"
            this.flag = true

          }
          else {
            this.errorMessage = '';
            this.flag = false

          }

        }
        break;
      case "accountNumber":
        if (this.input_value.length > 0) {
          if (!(/^[0-9]{10}$/.test(this.input_value))) {

            this.errorMessage = "Enter Valid Account Number"
            this.flag = true;
          }
          else {
            this.errorMessage = '';
            this.flag = false;
          }
        }
        break;
      case "emailAddress":
        if (this.input_value.length > 0) {
          if (!(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.input_value))) {
            this.errorMessage = "check the email again..it must contain . and @"
          }
          else {
            this.errorMessage = '';
          }
        }
        break;
      case "userName":
        if (this.input_value.length > 0) {
          if (!(/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/.test(this.input_value))) {
            this.errorMessage = "Should be only characters"
          }
          else {
            this.errorMessage = '';
          }
        }
        break;

     
    }
    


  }
  e = [];
  input: string
  sendOtp() {
    this.str = this.input_value;
    this.email = "rraturi.nidhi@gmail.com"
    this.email.substring(0, 1)
    //  var e=this.email.replace(/.(?=.{1})/g,'x')
    var n = this.str.replace(/.(?=.{4})/g, 'x');
    for (var i = 0; i < this.email.length; i++) {
      if (i == 0 || i == this.email.length - 1) {
        this.e[i] = this.email[i];

      }
      else {
        this.e[i] = 'X';
      }

    }

    console.log(this.e, "hello");
    console.log(n)

    this.api.sendOtp(this.type, this.input_value).subscribe((data) => {

      console.log(data,"in ts")
    })

    if(!(navigator.onLine))
    {
alert("Network Error");
    }
  }
  userData;
  verifyOtp() {

    this.api.loginUser(this.otp, this.type, this.input_value, "web").subscribe((data) => {
console.log(data)

      this.userData = JSON.stringify(data)

      localStorage.setItem("userdata", this.userData)
      console.log(localStorage.getItem("userdata"), "hellllooooooo");
      console.log(data.status);
      if (data.status === "success") {
        console.log("insideeee")
        console.log(data.token);
        localStorage.setItem("token", data.token)
 console.log(localStorage.getItem("token"));
       
        this.route.navigate(['my-profile'])
      }
    })
  
  }
  // timeConvertor(111005263);
  UNIX_timestamp = 111005263;

  timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + '-' + month + '-' + year;
    console.log(typeof time)
    
  }

  setFlag() {
    console.log("check1", this.checkFlag)
    this.checkFlag = !this.checkFlag;
    console.log("check2", this.checkFlag)
  }


  setFlagg(value)
  {
    
  }
  // gtKFFx|skdjbfbfsdkjbfksjdbfkjdsbf|1000|cable|Smart|smart@gmail.com|||||||||||eCwWELxi
}




import { Component, OnInit } from '@angular/core';
import { HathService } from './../hath.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user;
  customerAddress = [];
  customerDetail: any;
  newEmail;
  constructor(private route: Router, private api: HathService) { }
  user1;
  otp;
  imageUrl;
  ngOnInit() {
    
    this.user = localStorage.getItem("userdata");
    console.log(this.user)
    this.user1 = JSON.parse(this.user);
    console.log(this.user1)
    this.customerDetail = this.user1.customer
    this.customerAddress = this.user1.customer_address
    this.imageUrl = this.customerDetail.profile_image
    console.log(this.customerAddress, "customerrrrr")
    const mobileNo=this.customerDetail.registered_mobile_no
  }
  editMob;
  type = "registered_mobile_no"
  base64textString;
 
  generateOtp(newMobileNo, mobileNo) {
    if(newMobileNo==='')
    {
      alert("field must not be empty");
    }
    else{
    this.api.sendOtpNewMobile(parseInt(newMobileNo), mobileNo).subscribe((data) => {

      console.log(data)
    })
  }
  }
  editPhoneno(otp,newMobileNo) {
    console.log(otp)
 this.editMob =
      {
        "registered_mobile_no": this.customerDetail.registered_mobile_no,
        "new_registered_mobile_no": newMobileNo,
        "login_device": "web",
        "otp":otp

      }
    console.log(this.editMob, "edit mobile")
    this.api.editMobile(this.editMob).subscribe((data) => {
      console.log(data)
    })
  
  }


  imageSize;
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];
    this.imageSize = (files[0].size) / 1024
    let fileType = files[0].type;
    console.log(fileType)
    console.log(this.imageSize / 1024);
    if (this.imageSize > 40) {
      alert("file size must not exceed 40 Kb");
    }
// else if(!(fileType==="images/jpeg" || fileType==="images/png" || fileType==="images/jpg"))
// {
 
//   alert("Please upload the image file in .jpg or .png format" )
// }
   else if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    if (this.imageSize < 40) {
      let profilePicObj =
        {
          "image": this.base64textString,
          "registered_mobile_no": this.customerDetail.registered_mobile_no,
          "login_device": "web"
        }
      this.api.uploadImage(profilePicObj).subscribe((data) => {
        console.log(data)
       
        // this.imageUrl = data.image_name;

      })
    }
   
   
  }


  generateEmailOtp(newEmailAddress) {
    console.log("in func")
    this.api.sendOtpEmail(newEmailAddress, this.customerDetail.email, this.customerDetail.registered_mobile_no).subscribe((data) => {
      console.log(data, "in otp email")
    })
  }

  editEmailAddress;
  editEmail(otp, newEmail) {
    console.log(newEmail);
    console.log("hellooooo")
    this.editEmailAddress =
      {
        "registered_mobile_no": (this.customerDetail.registered_mobile_no).toString(),
        "email": this.customerDetail.email,
        "new_email": newEmail,
        "login_device": "web",
        "otp": otp

      }
    console.log(this.editEmailAddress, "edit email")
    this.api.editEmail(this.editEmailAddress).subscribe((data) => {
      console.log(data)
    })
  }
}

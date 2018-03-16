import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HathService } from './../hath.service';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'app-welcomescreen',
  templateUrl: './welcomescreen.component.html',
  styleUrls: ['./welcomescreen.component.css']
})
export class WelcomescreenComponent implements OnInit {
  userName = "";
  page_name = "dashboard";
  seoResponse;
  imagePath="../assets/banner1.jpg";
  imageUrl = [];
  constructor(meta: Meta, title: Title, private api: HathService) {
    // this.api.fetchBanner().subscribe((data) => {

    //   console.log(JSON.parse(data.text()).banner_data[0].banner_image, "hello")
    //   console.log(JSON.parse(data.text()).banner_data.length,"length")
    //   for(var i=0;i<JSON.parse(data.text()).banner_data.length;i++)
    //   {
    //     if(JSON.parse(data.text()).banner_data[i].sequence_no==JSON.parse(data.text()).banner_data[i+1].sequence_no)
    //     {
          
    //       this.imageUrl.push(JSON.parse(data.text()).banner_data[i].banner_image);
    //     }
    
    //   }
    //  console.log(this.imageUrl)
    // })
   
    // this.seoResponse = this.api.seoCall(this.page_name);



  }

  ngOnInit() {
  }
  public imageSources: string[] = [
    '../assets/banner3.jpg',
    '../assets/banner3.jpg',
    '../assets/banner3.jpg'
 ];
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 2000,
   stopAutoplayMinWidth: 768
 };
}

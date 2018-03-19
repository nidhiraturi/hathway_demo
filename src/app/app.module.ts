import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HathService } from '../app/hath.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import {sha512} from 'js-sha512';
 import {Configuration} from './config';
import { DataTableComponent } from './data-table/data-table.component';
import { SortPipe } from './sort.pipe';
import {SearchfilterPipe} from './searchfilter.pipe'
import { BaseSixtyFourInputComponent } from './base-sixty-four-input/base-sixty-four-input.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {HttpCacheService} from '../app/cache.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from '../app/authInterceptor';
import {cacheInterceptor} from '../app/cacheInterceptor'
import{HttpClient,HttpClientModule}  from '@angular/common/http';
import { CarouselModule } from 'angular4-carousel';
import { LoginmodifiedComponent } from './loginmodified/loginmodified.component';

// import {BillsComponent} from './bills/bills.component'
// import {NgIdleModule} from '@ng-idle/core'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup

// import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

@NgModule({
  declarations: [
    AppComponent,
    WelcomescreenComponent,
    AboutComponent,
    LoginComponent,
    DataTableComponent,
    SortPipe,
    SearchfilterPipe,
    BaseSixtyFourInputComponent,
    MyProfileComponent,
    LoginmodifiedComponent

  ],
  imports: [
    CommonModule,
  HttpClientModule,
  CarouselModule,
    RecaptchaModule.forRoot(),
    
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomescreenComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'data-table',
        component:DataTableComponent
      },
      {
        path:'my-profile',
        component:MyProfileComponent
      },
      {
        path:'loginmodified',
        component:LoginmodifiedComponent
      }

    ]),
  
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    
    BrowserModule.withServerTransition({ appId: 'ispselfcare' })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },HathService,Configuration,HttpCacheService],
  exports: [AppComponent]
})

export class AppModule { }
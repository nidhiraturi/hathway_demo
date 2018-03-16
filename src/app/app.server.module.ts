/// <reference types="node" />

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule} from './app.module';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HathService} from '../app/hath.service'

@NgModule({
  imports: [
    ServerModule,
    NoopAnimationsModule,
    AppModule
   
  ],
  bootstrap: [AppComponent],
  providers: [HathService]
})
export class AppServerModule { }

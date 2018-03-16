import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HathService } from 'app/hath.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import {sha512} from 'js-sha512';
 import {Configuration} from '../config';
 import { RouterTestingModule } from '@angular/router/testing';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule,HttpModule,RouterModule,RecaptchaModule,ReactiveFormsModule,RouterTestingModule],
      providers:[HathService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('has a dummy spec to test 2 + 2', function() {
  //   expect(2 + 2).toEqual(4);
  // });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomescreenComponent } from './welcomescreen.component';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HathService } from 'app/hath.service';
import {Configuration} from '../config'
describe('WelcomescreenComponent', () => {
  let component: WelcomescreenComponent;
  let fixture: ComponentFixture<WelcomescreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomescreenComponent ],
      imports:[FormsModule,HttpModule,RouterModule],
      providers:[HathService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

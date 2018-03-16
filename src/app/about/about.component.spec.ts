import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HathService } from 'app/hath.service';
import {Configuration} from '../config';
import {compute} from './about.component';
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent],
      imports:[FormsModule,HttpModule,RouterModule],
      providers:[HathService,Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 if negative no.',()=>{
            const result=compute(-1)
            expect(result).toBe(0);
        })


});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmodifiedComponent } from './loginmodified.component';

describe('LoginmodifiedComponent', () => {
  let component: LoginmodifiedComponent;
  let fixture: ComponentFixture<LoginmodifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmodifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmodifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

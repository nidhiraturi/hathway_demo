import { TestBed, inject } from '@angular/core/testing';

import { HathService } from './hath.service';
import {HttpModule} from '@angular/http';
import {Configuration} from './config';
describe('HathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HathService,Configuration],
      imports:[HttpModule]
    });
  });

  it('should be created', inject([HathService], (service: HathService) => {
    expect(service).toBeTruthy();
  }));
});

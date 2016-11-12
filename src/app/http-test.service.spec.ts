/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpTestService } from './http-test.service';

describe('Service: HttpTest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpTestService]
    });
  });

  it('should ...', inject([HttpTestService], (service: HttpTestService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PersianCalenderService } from './persian-calender.service';

describe('PersianCalenderService', () => {
  let service: PersianCalenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersianCalenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

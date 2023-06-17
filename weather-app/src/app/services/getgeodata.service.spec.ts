import { TestBed } from '@angular/core/testing';

import { GetgeodataService } from './getgeodata.service';

describe('GetgeodataService', () => {
  let service: GetgeodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetgeodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

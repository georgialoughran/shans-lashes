import { TestBed } from '@angular/core/testing';

import { LashServiceService } from './lash-service.service';

describe('LashServiceService', () => {
  let service: LashServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LashServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

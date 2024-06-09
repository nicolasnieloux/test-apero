import { TestBed } from '@angular/core/testing';

import { AperoRestService } from './apero-rest.service';

describe('AperoRestService', () => {
  let service: AperoRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AperoRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

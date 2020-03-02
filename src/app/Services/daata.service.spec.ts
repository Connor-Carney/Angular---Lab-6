import { TestBed } from '@angular/core/testing';

import { DaataService } from './daata.service';

describe('DaataService', () => {
  let service: DaataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

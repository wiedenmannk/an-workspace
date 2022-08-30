import { TestBed } from '@angular/core/testing';

import { StarterLibService } from './starter-lib.service';

describe('StarterLibService', () => {
  let service: StarterLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarterLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NetworkDataService } from './network-data.service';

describe('NetworkDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NetworkDataService = TestBed.get(NetworkDataService);
    expect(service).toBeTruthy();
  });
});

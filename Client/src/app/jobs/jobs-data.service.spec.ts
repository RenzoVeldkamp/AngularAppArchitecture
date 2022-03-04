import { TestBed } from '@angular/core/testing';

import { JobsDataService } from './jobs-data.service';

describe('JobsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsDataService = TestBed.get(JobsDataService);
    expect(service).toBeTruthy();
  });
});

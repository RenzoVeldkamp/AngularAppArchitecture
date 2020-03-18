import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeDataService } from './home-data.service';

describe('HomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: HomeDataService = TestBed.get(HomeDataService);
    expect(service).toBeTruthy();
  });
});

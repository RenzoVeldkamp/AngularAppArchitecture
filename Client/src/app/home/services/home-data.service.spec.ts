import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { HomeDataService } from './home-data.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HomeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
}));

  it('should be created', () => {
    const service: HomeDataService = TestBed.inject(HomeDataService);
    expect(service).toBeTruthy();
  });
});

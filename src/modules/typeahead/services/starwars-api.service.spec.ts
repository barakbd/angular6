import { TestBed, inject } from '@angular/core/testing';

import { StarwarsApiService } from './starwars-api.service';

describe('StarwarsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarwarsApiService]
    });
  });

  it('should be created', inject([StarwarsApiService], (service: StarwarsApiService) => {
    expect(service).toBeTruthy();
  }));
});

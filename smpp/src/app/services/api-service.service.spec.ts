import { TestBed } from '@angular/core/testing';

import { ApiService } from './api-service.service';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });

  it('should pull JSON stock data', () => {
    const service: ApiService = TestBed.get(ApiService);

    const test_json = service.ping('TIME_SERIES_INTRADAY', 'MSFT', '1min');

    console.log(test_json);

    expect(test_json).toHaveClass(JSON);
  })
});

import { TestBed } from '@angular/core/testing';

import { ApiInterface } from './api-interface.service';
import { AVQueryParams } from '../models/AVQueryParams.model';

describe('ApiInterface', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiInterface = TestBed.get(ApiInterface);
    expect(service).toBeTruthy();
  });

  it('should pull JSON stock data', () => {
    const service: ApiInterface = TestBed.get(ApiInterface);

    const test_params: AVQueryParams = new Object() as AVQueryParams;
    test_params.api_function = 'TIME_SERIES_INTRADAY';
    test_params.stock_symbol = ['MSFT'];
    test_params.interval = '5min';

    const test_json = service.pull_av_data(test_params);
    expect(test_json).not.toBeNull();
  });
});

import { Injectable } from '@angular/core';
import { AVDataSet } from '../models/AVDataSet.model';

import AlphaVantage from 'alphavantage-ts';
import { AVQueryParams } from '../models/AVQueryParams.model';
import { AVMetaData } from '../models/AVMetaData.model';
import {
  TimeInterval,
  OutputSize,
  DataType
} from 'alphavantage-ts/dist/stocks';

@Injectable({
  providedIn: 'root'
})
export class ApiInterface {
  private api_key = '4J799EXIEU5AC8XK';
  private av_api = new AlphaVantage(this.api_key);

  constructor() {}

  parse_av_data(api_response): AVDataSet {
    let api_data = new Object() as AVDataSet;
    const property_keys = Object.keys(api_response);
    for (let i = 0; i < property_keys.length; i++) {
      if (property_keys[i] == 'Meta Data') {
        api_data.meta_data = new Object() as AVMetaData;
      }
    }

    return new Object() as AVDataSet;
  }

  pull_av_data(params: AVQueryParams): AVDataSet {
    let av_data_set: AVDataSet;

    switch (params.api_function) {
      case 'TIME_SERIES_INTRADAY': {
        this.av_api.stocks.intraday('msft', params).then(data => {
          console.log(data);
          av_data_set = data as AVDataSet;
        });
      }
    }
    return av_data_set;
  }
}

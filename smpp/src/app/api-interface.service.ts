import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ApiInterfaceService {
  private api_key = '4J799EXIEU5AC8XK';
  backend_response: JSON;

  constructor(private backend: HttpClient) {}

  get_time_series_JSON(data: JSON) {
    for (const key in data) {
      if (key === 'Time Series (Daily)') {
        return data[key];
      }
    }
  }

  pull_data(
    api_function: string,
    stock_symbol: string,
    dataset_outputsize: string,
    dataset_type: string
  ): Promise<string> {
    let api_response: string;

    const query_url =
      'https://www.alphavantage.co/query?' +
      'function=' +
      api_function +
      '&symbol=' +
      stock_symbol +
      '&outputsize=' +
      dataset_outputsize +
      '&datatype=' +
      dataset_type +
      '&apikey=' +
      this.api_key;

    const ping = new XMLHttpRequest();
    ping.open('GET', query_url, true);
    ping.onerror = error => {
      console.log('AlphaVantage API Error:', error);
    };
    ping.onprogress = progress => {
      console.log('bytes loaded:', progress.loaded);
    };
    ping.onload = () => {
      console.log('Ping success!');
      api_response = ping.response;
    };
    ping.send();

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(api_response);
      }, 3000);
    });
  }

  flask_ping() {
    this.backend.get('http://127.0.0.1:5002/').subscribe(data => {
      this.backend_response = data as JSON;
      console.log(this.backend_response);
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api_key = '4J799EXIEU5AC8XK';

  constructor() { }

  ping(api_function, stock_symbol, time_interval) {
    const url = 'https://www.alphavantage.co/query?' +
    `function=${ api_function }&` +
    `symbol=${ stock_symbol }&` +
    `interval=${ time_interval }&` +
    `apikey=${ this.api_key }`;

    let stock_api_data;

    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onerror = (error) => { console.log('Error:', error); };
    request.onprogress = (progress) => { console.log('bytes loaded:', progress.loaded); };
    request.onload = () => { stock_api_data = get_json(request); }; //(data) => { stock_api_data = data.target; };
    request.send( null );

    function get_json(data) {
      const response = data.target.response;
      const json = JSON.parse(response);
      return json;
    }

    return stock_api_data;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ApiInterfaceService } from '../api-interface.service';
import { StockHistoryGraphComponent } from './stock-history-graph/stock-history-graph.component';

@Component({
  selector: 'app-nn-input',
  templateUrl: './nn-input.component.html',
  styleUrls: ['./nn-input.component.scss']
})
export class NnInputComponent implements OnInit {
  @ViewChild(StockHistoryGraphComponent, { static: false })
  private charting: StockHistoryGraphComponent;

  symbol = '';

  query_params = new FormGroup({
    stock_symbol: new FormControl(''),
    investment_amount: new FormControl('')
  });

  constructor(private api: ApiInterfaceService) {}

  ngOnInit() {}

  onSubmit() {
    this.symbol = this.query_params.get('stock_symbol').value;
    this.api
      .pull_data('TIME_SERIES_DAILY', this.symbol, 'full', 'JSON')
      .then(data => {
        this.charting.stock_performance_data = JSON.parse(data);
        this.charting.symbol = this.symbol;
        this.charting.checkData();
      });
    this.api.flask_ping();
  }
}

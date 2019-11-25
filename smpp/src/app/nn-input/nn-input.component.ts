import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ApiInterfaceService } from '../api-interface.service';

@Component({
  selector: 'app-nn-input',
  templateUrl: './nn-input.component.html',
  styleUrls: ['./nn-input.component.scss']
})
export class NnInputComponent implements OnInit {
  symbol = '';
  stock_performance_data: JSON;

  query_params = new FormGroup({
    stock_symbol: new FormControl(''),
    investment_amount: new FormControl('')
  });

  constructor(private api: ApiInterfaceService) {}

  ngOnInit() {}

  onSubmit() {
    this.symbol = this.query_params.get('stock_symbol').value;
    this.stock_performance_data = this.api.pull_data(
      'TIME_SERIES_DAILY',
      this.symbol,
      'full',
      'JSON'
    );
  }
}

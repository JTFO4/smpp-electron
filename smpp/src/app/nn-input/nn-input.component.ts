import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatSelect } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nn-input',
  templateUrl: './nn-input.component.html',
  styleUrls: ['./nn-input.component.scss']
})
export class NnInputComponent implements OnInit {
  symbol = '';

  query_params = new FormGroup({
    stock_symbol: new FormControl(''),
    investment_amount: new FormControl('')
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.query_params.value);
    this.symbol = this.query_params.get('stock_symbol').value;
    console.log(this.symbol);
  }
}

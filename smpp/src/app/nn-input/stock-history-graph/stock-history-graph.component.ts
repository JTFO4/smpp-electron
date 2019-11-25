import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-history-graph',
  templateUrl: './stock-history-graph.component.html',
  styleUrls: ['./stock-history-graph.component.scss']
})
export class StockHistoryGraphComponent implements OnInit, OnChanges {
  @Input() symbol: string;
  @Input() stock_performance_data: JSON;

  // Google Charts Attributes
  google_chart_type = 'LineChart';
  title = 'Stock Performance Data For ' + (this.symbol || 'SSMP');
  type = 'LineChart';
  columnNames = [];
  data = [];
  height = 250;
  width = 700;

  constructor() {
    const today = new Date();
    const date =
      today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear();
    if (this.symbol === undefined) {
      this.data = [[date, 0]];
    }
  }

  ngOnInit() {}

  ngOnChanges() {
    this.title = 'Stock Performance Data For ' + (this.symbol || 'SSMP');
  }
}

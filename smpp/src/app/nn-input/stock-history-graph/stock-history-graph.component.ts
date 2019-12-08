import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as CanvasJS from 'node_modules/canvasjs-2.3.2/canvasjs.min';

@Component({
  selector: 'app-stock-history-graph',
  templateUrl: './stock-history-graph.component.html',
  styleUrls: ['./stock-history-graph.component.scss']
})
export class StockHistoryGraphComponent implements OnInit, OnChanges {
  @Input() symbol = 'SMPP';
  @Input() stock_performance_data;
  private chart;

  // Google Charts Attributes
  google_chart_type = 'LineChart';
  title = 'Stock Performance Data For ' + (this.symbol || 'SMPP');
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

  ngOnInit() {
    const dataPoints = [];
    this.chart = new CanvasJS.Chart('chartContainer', {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      width: 700,
      title: {
        text: 'SMPP'
      },
      subtitles: [
        {
          text: 'Historical Stock Performance'
        }
      ],
      axisX: {
        title: 'Timestamp'
      },
      axisY: {
        title: 'Index ($ USD)'
      },
      data: [
        {
          type: 'line',
          dataPoints: dataPoints
        }
      ]
    });

    this.chart.render();
  }

  ngOnChanges() {}

  checkData() {
    this.chart.options.title.text = this.symbol;
    let time_series_key;
    this.chart.options.data[0].dataPoints = [];
    for (const key in this.stock_performance_data) {
      if (key.match(/Time Series/)) {
        time_series_key = this.stock_performance_data[key];
      }
    }
    for (const entry in time_series_key) {
      if (entry.match(/[0-9]{4}\-[0-9]{2}\-[0-9]{2}/)) {
        this.chart.options.data[0].dataPoints.push({
          x: new Date(entry),
          y: +time_series_key[entry]['4. close']
        });
      }
    }
    // console.log(time_series_data);
    // this.chart.options.data = time_series_data;
    this.chart.render();
    console.log('rendered');
  }
}

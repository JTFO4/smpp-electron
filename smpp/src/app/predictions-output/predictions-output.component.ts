import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface PredictionTab {
  label: string;
  content: string;
}
@Component({
  selector: 'app-predictions-output',
  templateUrl: './predictions-output.component.html',
  styleUrls: ['./predictions-output.component.scss']
})
export class PredictionsOutputComponent implements OnInit {
  predictionTabs: Observable<PredictionTab[]>;
  symbol = 'SMPP';

  constructor() {
    this.predictionTabs = new Observable(
      (observer: Observer<PredictionTab[]>) => {
        setTimeout(() => {
          observer.next([
            { label: 'Neural Network', content: 'Content 1' },
            { label: 'SGD', content: 'Content 2' },
            { label: 'Expert System', content: 'Content 3' }
          ]);
        }, 1000);
      }
    );
  }

  ngOnInit() {}
}

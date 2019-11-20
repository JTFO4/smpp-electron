import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHistoryGraphComponent } from './stock-history-graph.component';

describe('StockHistoryGraphComponent', () => {
  let component: StockHistoryGraphComponent;
  let fixture: ComponentFixture<StockHistoryGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockHistoryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHistoryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

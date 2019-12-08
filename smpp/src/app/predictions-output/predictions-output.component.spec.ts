import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionsOutputComponent } from './predictions-output.component';

describe('PredictionsOutputComponent', () => {
  let component: PredictionsOutputComponent;
  let fixture: ComponentFixture<PredictionsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictionsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictionsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

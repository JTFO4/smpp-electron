import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsOutputComponent } from './es-output.component';

describe('EsOutputComponent', () => {
  let component: EsOutputComponent;
  let fixture: ComponentFixture<EsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

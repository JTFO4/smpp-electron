import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NnInputComponent } from './nn-input.component';

describe('NnInputComponent', () => {
  let component: NnInputComponent;
  let fixture: ComponentFixture<NnInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

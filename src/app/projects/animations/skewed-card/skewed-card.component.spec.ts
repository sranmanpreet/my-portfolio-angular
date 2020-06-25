import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkewedCardComponent } from './skewed-card.component';

describe('SkewedCardComponent', () => {
  let component: SkewedCardComponent;
  let fixture: ComponentFixture<SkewedCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkewedCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkewedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

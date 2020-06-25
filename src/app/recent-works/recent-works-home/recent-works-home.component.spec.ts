import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWorksHomeComponent } from './recent-works-home.component';

describe('RecentWorksHomeComponent', () => {
  let component: RecentWorksHomeComponent;
  let fixture: ComponentFixture<RecentWorksHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentWorksHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWorksHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

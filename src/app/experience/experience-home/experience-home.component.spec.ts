import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHomeComponent } from './experience-home.component';

describe('ExperienceHomeComponent', () => {
  let component: ExperienceHomeComponent;
  let fixture: ComponentFixture<ExperienceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

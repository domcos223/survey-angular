import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysurveysComponent } from './mysurveys.component';

describe('MysurveysComponent', () => {
  let component: MysurveysComponent;
  let fixture: ComponentFixture<MysurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysurveysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

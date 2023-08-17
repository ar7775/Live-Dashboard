import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartRightComponent } from './line-chart-right.component';

describe('LineChartRightComponent', () => {
  let component: LineChartRightComponent;
  let fixture: ComponentFixture<LineChartRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

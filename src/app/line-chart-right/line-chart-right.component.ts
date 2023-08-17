import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { interval } from 'rxjs';

@Component({
  selector: 'app-line-chart-right',
  template: '<canvas id="lineChartright"></canvas>',
})
export class LineChartRightComponent implements OnInit, OnDestroy {
  private lineChartright!: Chart;
  private chartData: any = {
    labels: [
      '12:06:29',
      '12:06:39',
      '12:06:49',
      '12:06:59',
      '12:06:59',
      '12:07:09',
      '12:07:19',
    ],
    datasets: [
      {
        label: 'Power Factor',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      },
    ],
  };
  private chartUpdateInterval;

  ngOnInit() {
    this.lineChartright = new Chart('lineChartright', {
      type: 'line',
      data: this.chartData,
    });

    this.chartUpdateInterval = interval(2000).subscribe(() => {
      // update chart data
      const newData: number[] = [];
      for (let i = 0; i < 7; i++) {
        newData.push(Math.floor(Math.random() * 100));
      }
      this.lineChartright.data.datasets[0].data = newData;
      this.lineChartright.update();
    });
  }

  ngOnDestroy() {
    this.chartUpdateInterval.unsubscribe();
  }
}

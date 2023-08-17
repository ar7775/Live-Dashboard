import { Component, OnInit } from '@angular/core';

interface Floor {
  value: string;
  viewValue: string;
}
interface Sections {
  value: string;
  viewValue: string;
}
interface Views {
  value: string;
  viewValue: string;
}
interface Meter {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-live-dashboard',
  templateUrl: './live-dashboard.component.html',
  styleUrls: ['./live-dashboard.component.css'],
})
export class LiveDashboardComponent implements OnInit {
  floors: Floor[] = [
    { value: 'floor-1', viewValue: '1' },
    { value: 'floor-2', viewValue: '2' },
    { value: 'floor-3', viewValue: '3' },
  ];
  sections: Sections[] = [
    { value: 'section-1', viewValue: 'Lab 1' },
    { value: 'section-2', viewValue: 'Lab 2' },
    { value: 'section-3', viewValue: 'Lab 3' },
  ];
  view: Views[] = [
    { value: 'view-1', viewValue: 'Individual' },
    { value: 'view-2', viewValue: 'Group' },
  ];
  meter: Meter[] = [
    { value: 'meter-1', viewValue: 'Meter 1' },
    { value: 'meter-2', viewValue: 'Meter 2' },
    { value: 'meter-3', viewValue: 'Meter 3' },
    { value: 'meter-4', viewValue: 'Meter 4' },
    { value: 'meter-5', viewValue: 'Meter 5' },
  ];

  range = [0, 1, 2, 3, 4];
  gaugeType = 'semi';
  gaugeValue = [
    Math.random() * 200,
    Math.random() * 50,
    Math.random() * 20,
    Math.random() * 10,
    Math.random() * 60,
  ];
  gaugeLabel = [
    'Voltage(V)',
    'Current(A)',
    'Power(kW)',
    'Power Factor',
    'Frequency(Hz)',
  ];

  ngOnInit() {
    setInterval(() => (this.gaugeValue[0] = Math.random() * 200), 2000);
    setInterval(() => (this.gaugeValue[1] = Math.random() * 50), 2000);
    setInterval(() => (this.gaugeValue[2] = Math.random() * 20), 2000);
    setInterval(() => (this.gaugeValue[3] = Math.random()), 2000);
    setInterval(() => (this.gaugeValue[4] = Math.random() * 60), 2000);
  }
}

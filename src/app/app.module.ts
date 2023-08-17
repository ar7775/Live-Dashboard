import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxGaugeModule } from 'ngx-gauge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LiveDashboardComponent } from './live-dashboard/live-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './line-chart/line-chart.component';
import { LineChartRightComponent } from './line-chart-right/line-chart-right.component';

@NgModule({
  declarations: [AppComponent, LiveDashboardComponent, LineChartComponent, LineChartRightComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    NgxGaugeModule,
    NgxChartsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    maintainAspectRatio:false,
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2019'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public barChartData: ChartDataSets[]
  fem
  male
  constructor(private student : StudentService) {
    var f = this.student.getCount({gender:'Female'})
    f.subscribe(res => {
      this.fem = res
    })

    var m = this.student.getCount({gender:'Male'})
    m.subscribe(res => {
      this.male = res
      this.ngOnInit();
    })

  }

  ngOnInit() {
    this.barChartData = [
      { data: [this.fem], label: 'Girls' },
      { data: [this.male], label: 'Boys' }
    ];
  }

}

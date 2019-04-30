import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  /** Based on the screen size, switch from standard to one column per row */
  time = new Observable<string>((observer: Observer<string>)=>{
    setInterval(() => {
      observer.next(new Date().toString())
    } ,1000)
  })

  students
  dayscholar
  hosteller
  constructor(private student : StudentService) {
    var response = this.student.getCount({})
    response.subscribe(res=> this.students = res)
    var response2 = this.student.getCount({type: 'Hosteller'})
    response2.subscribe(res => this.hosteller = res)
    var response3 = this.student.getCount({type: 'Day Scholar'})
    response3.subscribe(res => this.dayscholar = res)
  }
}

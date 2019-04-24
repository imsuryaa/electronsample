import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

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
  constructor() {}
}

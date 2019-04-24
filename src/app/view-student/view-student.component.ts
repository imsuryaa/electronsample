import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  classes = ['Class 10th','Class 9th','Class 8th','Class 7th','Class 6th','Class 5th','Class 4th','Class 3rd','Class 2nd','Class 1st','UKG','LKG']
  selectedClass
  constructor() { }

  ngOnInit() {
  }

  view(){
    console.log(this.selectedClass)
  }

}

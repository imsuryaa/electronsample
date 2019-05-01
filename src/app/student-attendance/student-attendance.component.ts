import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.css']
})
export class StudentAttendanceComponent implements OnInit {

  r1c1 : FormGroup
  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {
    this.r1c1 = this._formBuilder.group({
      admission_no : [{value:'', disabled:false}]
    })
  }
}

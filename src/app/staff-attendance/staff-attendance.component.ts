import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-staff-attendance',
  templateUrl: './staff-attendance.component.html',
  styleUrls: ['./staff-attendance.component.css']
})
export class StaffAttendanceComponent implements OnInit {

  r1c1 : FormGroup
  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {
    this.r1c1 = this._formBuilder.group({
      staff_id : [{value:'', disabled:false}]
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-examination',
  templateUrl: './view-examination.component.html',
  styleUrls: ['./view-examination.component.css']
})
export class ViewExaminationComponent implements OnInit {

  r1c1: FormGroup
  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {

    this.r1c1 = this._formBuilder.group({
      exam_code: [{ value: 'EQ28', disabled: false}],
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-examination',
  templateUrl: './create-examination.component.html',
  styleUrls: ['./create-examination.component.css']
})
export class CreateExaminationComponent implements OnInit {

  terms = ['Term 1','Term 2','Term 3']
  selectedTerm : string

  examinations = ['Unit','Quaterly','Half Yearly','Pre-Final','Annual']
  selectedExamination: string

  choice: any
  constructor() { }

  ngOnInit() {
  }

}

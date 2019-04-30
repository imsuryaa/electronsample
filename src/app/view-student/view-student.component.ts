import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  classes = ['Class 10th','Class 9th','Class 8th','Class 7th','Class 6th','Class 5th','Class 4th','Class 3rd','Class 2nd','Class 1st','UKG','LKG']
  selectedClass: any
  data: Object
  keys: string[]
  constructor(private students : StudentService) {
    var response = this.students.getAllStudents()
    response.subscribe(res => {
      this.data = res
      this.keys = Object.keys(this.data)
    })
  }

  ngOnInit() {
  }

  view(){
    /*let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=480,height=640`;
    window.open('/view', 'Details', params)*/
    var response = this.students.getStudentById({class:this.selectedClass})
    response.subscribe(res => {
      this.data = res
      this.keys = Object.keys(this.data)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

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
  constructor(private students : StudentService, private dialog : MatDialog) {
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
    var response = this.students.getStudentByClass({class:this.selectedClass})
    response.subscribe(res => {
      if(this.isEmpty(res)){
        this.openDialog('No Records Found')
      }

      else {
        this.data = res
        console.log(this.data)
        this.keys = Object.keys(this.data)
      }
    })
  }

  isEmpty(obj: Object) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  openDialog(reason: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '400px', data: { action : 'delete', reason : reason},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  window(key){
    var d = this.data[key]


    var myvar = '<!DOCTYPE html>'+
    '<html lang="en" dir="ltr">'+
    '  <head>'+
    '    <meta charset="utf-8">'+
    '    <title></title>'+
    '    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">'+
    '    <style>'+
    '      table {'+
    '        font-family: arial, sans-serif;'+
    '        border-collapse: collapse;'+
    '        width: 100%;'+
    '      }'+
    ''+
    '      td, th {'+
    '        border: 1px solid #dddddd;'+
    '        text-align: center;'+
    '        padding: 8px;'+
    '        font-size: 12px;'+
    '      }'+
    ''+
    '      tr:nth-child(even) {'+
    '        background-color: #dddddd;'+
    '      }'+
    '    </style>'+
    '  </head>'+
    '  <body>'+
    '    <div class="container">'+
    '      <div class="container-fluid" style="background-color:#536DFE;">'+
    '        <h3 style="color: white; padding-top: 24px">School Name</h3><hr><button style="margin-bottom:16px" onclick="window.print()">Print</button>'+
    '        <br>'+
    '      </div>'+
    '      <br>'+
    '      <h4>Student Details</h4>'+
    '      <br>'+
    '      <div class="row">'+
    '        <div class="col" style="text-align:center">'+
    '          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" height="200px" width="200px" alt="student_image">'+
    '        </div>'+
    ''+
    '        <div class="col">'+
    '          <table>'+
    '      <tr>'+
    '        <td>Admission No.</td>'+
    '        <td>'+d.admission_no+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Full Name</td>'+
    '        <td>'+d.fName+' '+d.lName+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>DOB</td>'+
    '        <td>'+d.dob+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Cls/Sec</td>'+
    '        <td>'+d.class+' '+d.section+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Roll No.</td>'+
    '        <td>'+d.roll_no+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Gender</td>'+
    '        <td>'+d.gender+'</td>'+
    '      </tr>'+
    '          </table>'+
    '        </div>'+
    ''+
    '        <div class="col">'+
    '          <table>'+
    '      <tr>'+
    '        <td>Category</td>'+
    '        <td>'+d.category+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>School House</td>'+
    '        <td>'+d.house+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Admission Date</td>'+
    '        <td>'+d.as_on+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Type</td>'+
    '        <td>'+d.type+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Hostel</td>'+
    '        <td>'+d.hostel+' '+d.room+'</td>'+
    '      </tr>'+
    '          </table>'+
    '        </div>'+
    ''+
    '        <div class="col">'+
    ''+
    '        </div>'+
    '      </div>'+
    '      <br>'+
    '      <hr>'+
    '      <h4>Parent/Guardian Details</h4>'+
    '      <br>'+
    '      <div class="row">'+
    '        <div class="col" style="text-align:center">'+
    '          <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" height="200px" width="200px" alt="student_image">'+
    '        </div>'+
    ''+
    '        <div class="col">'+
    '          <table>'+
    '      <tr>'+
    '        <td>Father Name</td>'+
    '        <td>'+d.father_name+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Mother Name</td>'+
    '        <td>'+d.mother_name+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Father Phone</td>'+
    '        <td>'+d.father_phone+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Mother Phone</td>'+
    '        <td>'+d.mother_phone+'</td>'+
    '      </tr>'+
    '          </table>'+
    '        </div>'+
    ''+
    '        <div class="col">'+
    '          <table>'+
    '      <tr>'+
    '        <td>Father Occupation</td>'+
    '        <td>'+d.father_occ+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Mother Occupation</td>'+
    '        <td>'+d.mother_occ+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Guardian Name</td>'+
    '        <td>'+d.guardian_name+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Guardian Phone</td>'+
    '        <td>'+d.guardian_phone+'</td>'+
    '      </tr>'+
    '          </table>'+
    '        </div>'+
    ''+
    '        <div class="col">'+
    '          <table>'+
    '      <tr>'+
    '        <td>Guardian Address</td>'+
    '        <td>'+d.guardian_address+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Guardian Occupation</td>'+
    '        <td>'+d.guardian_occ+'</td>'+
    '      </tr>'+
    '      '+
    '      <tr>'+
    '        <td>Guardian Email</td>'+
    '        <td>'+d.guardian_email+'</td>'+
    '      </tr>'+
    '          </table>'+
    '        </div>'+
    '      </div>'+
    '    </div>'+
    '  </body>'+
    '</html>';



    var html = '<!DOCTYPE html>'+
                '<html lang="en" dir="ltr">'+
                '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">'+
                '  <head>'+
                '    <meta charset="utf-8">'+
                '    <title>'+d.fName+' '+d.lName+'</title>'+
                '    <style>'+
                '      table {'+
                '        font-family: arial, sans-serif;'+
                '        border-collapse: collapse;'+
                '        width: 100%;'+
                '      }'+
                ''+
                '      td, th {'+
                '        border: 1px solid #dddddd;'+
                '        text-align: center;'+
                '        padding: 8px;'+
                '        font-size: 12px;'+
                '      }'+
                ''+
                '      tr:nth-child(even) {'+
                '        background-color: #dddddd;'+
                '      }'+
                '    </style>'+
                '  </head>'+
                '  <body>'+
                '<div class="container"><div><h4>Student Details</h4></div>'+
                '    <table style="margin:16px;">'+
                '      <tr>'+
                '      <td>Student Photo</td>'+
                '        <td><img style="box-shadow: 0 0 8px 0 gray; margin-top:8px;margin-bottom:8px" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" height="160px" width="160px" alt="student_image"></td>'+
                '      </tr>'+
                '      <tr>'+
                '        <td>Admission No.</td>'+
                '        <td>'+d.admission_no+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Full Name</td>'+
                '        <td>'+d.fName+' '+d.lName+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>DOB</td>'+
                '        <td>'+d.dob+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Cls/Sec</td>'+
                '        <td>'+d.class+' '+d.section+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Roll No.</td>'+
                '        <td>'+d.roll_no+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Gender</td>'+
                '        <td>'+d.gender+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Category</td>'+
                '        <td>'+d.category+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>School House</td>'+
                '        <td>'+d.house+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Admission Date</td>'+
                '        <td>'+d.as_on+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Type</td>'+
                '        <td>'+d.type+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Hostel</td>'+
                '        <td>'+d.hostel+' '+d.room+'</td>'+
                '      </tr>'+
                '    </table>'+
                '     <hr>'+
                '<div><h4>Parent/Guardian Details</h4></div>'+
                '    <table>'+
                '      <tr>'+
                '        <td>Father Name</td>'+
                '        <td>'+d.father_name+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Mother Name</td>'+
                '        <td>'+d.mother_name+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Father Phone</td>'+
                '        <td>'+d.father_phone+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Mother Phone</td>'+
                '        <td>'+d.mother_phone+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Father Occupation</td>'+
                '        <td>'+d.father_occ+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Mother Occupation</td>'+
                '        <td>'+d.mother_occ+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Guardian Name</td>'+
                '        <td>'+d.guardian_name+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Guardian Phone</td>'+
                '        <td>'+d.guardian_phone+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Guardian Address</td>'+
                '        <td>'+d.guardian_address+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Guardian Occupation</td>'+
                '        <td>'+d.guardian_occ+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Guardian Email</td>'+
                '        <td>'+d.guardian_email+'</td>'+
                '      </tr>'+
                '    </table>'+
                '     <hr>'+
                '<div><h4>Fee Particulars</h4></div>'+
                '    <table>'+
                '      <tr>'+
                '        <td>Concession</td>'+
                '        <td>'+d.consession+'</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Tution Fee</td>'+
                '        <td>9000.00</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Hostel Fee</td>'+
                '        <td>5000.00</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Transport Fee</td>'+
                '        <td>0.00</td>'+
                '      </tr>'+
                '      '+
                '      <tr>'+
                '        <td>Caution Deposit</td>'+
                '        <td>5000.00</td>'+
                '      </tr>'+
                '    </table></div>'+
                '   '+
                '  </body>'+
                '</html>';


    var info = window.open("", "_blank", "width=1024,height=640,location=0,scrollbars=0")
    info.document.write(myvar)
  }

}

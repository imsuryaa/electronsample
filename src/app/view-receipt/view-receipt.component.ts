import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ReceiptService } from '../receipt.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PayDialogComponent } from '../pay-dialog/pay-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-view-receipt',
  templateUrl: './view-receipt.component.html',
  styleUrls: ['./view-receipt.component.css']
})
export class ViewReceiptComponent implements OnInit {

  r1c1:FormGroup
  students = []
  stud:any
  receipts:any
  rKeys : any
  constructor(private student : StudentService, private receipt:ReceiptService, private _formBuilder: FormBuilder, public dialog: MatDialog) {
    var r = this.receipt.getAllReceipts()
    r.subscribe(res => {
      console.log(res)
      this.receipts = res
      this.rKeys = Object.keys(this.receipts)
      for (let i = 0; i < this.rKeys.length; i++) {
        var da = {
          admission_no :this.receipts[i].admission_no
        }
        console.log(da)
        var s = this.student.getStudentById(da)
        s.subscribe(res1 => {
          this.stud = res1
          console.log(this.stud)
          var d = {
            name : this.stud.fName+' '+this.stud.lName,
            father : this.stud.father_name,
            class : this.stud.class.slice(5)+' '+this.stud.section
          }
          this.students.push(d)
        })

        if(i == this.rKeys.length - 1){
          this.ngOnInit()
        }
      }
    })
  }

  ngOnInit() {

    this.r1c1 = this._formBuilder.group({
      receipt_no: [{value: '', disabled: false }],
    });
  }

  pay(data): void {
    const dialogRef = this.dialog.open(PayDialogComponent, {
      width: '640px',height: '480px', data: { action : data},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  view(){
    var response = this.receipt.getReceiptById({receipt_no:this.r1c1.value.receipt_no})
    response.subscribe(res => {
      console.log(res)
      this.receipts = res
      this.rKeys = Object.keys(this.receipts)
      for (let i = 0; i < this.rKeys.length; i++) {
        var da = {
          admission_no :this.receipts[i].admission_no
        }
        console.log(da)
        var s = this.student.getStudentById(da)
        s.subscribe(res1 => {
          this.stud = res1
          console.log(this.stud)
          var d = {
            name : this.stud.fName+' '+this.stud.lName,
            father : this.stud.father_name,
            class : this.stud.class.slice(5)+' '+this.stud.section
          }
          this.students.push(d)
        })

        if(i == this.rKeys.length - 1){
          this.ngOnInit()
        }
      }
    })
  }


}

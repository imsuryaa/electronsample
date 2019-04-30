import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { StudentService } from '../student.service';
import { ReceiptService } from '../receipt.service';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-generate-receipt',
  templateUrl: './generate-receipt.component.html',
  styleUrls: ['./generate-receipt.component.css']
})
export class GenerateReceiptComponent implements OnInit {
  terms = ['Term 1', 'Term 2', 'Term 3']
  selectedTerm: any

  r1c1: FormGroup;
  r1c2: FormGroup;
  r1c3: FormGroup;
  r1c4: FormGroup;

  r2c1: FormGroup;

  r3c1: FormGroup;
  r3c2: FormGroup;
  r3c3: FormGroup;
  r3c4: FormGroup;

  receipt_no: any
  data: any
  name: any
  class: any
  section: any

  amount: any
  date = new Date()

  constructor(private _formBuilder : FormBuilder, private student : StudentService, private receipt : ReceiptService, public dialog : MatDialog) {

  }

  ngOnInit() {

    this.r1c1 = this._formBuilder.group({
      receipt_no: [{value: 'PORD01254', disabled: true }],
    });
    this.r1c2 = this._formBuilder.group({
      date: [{ value: new Date(), disabled: true}],
    });
    this.r1c3 = this._formBuilder.group({
      amount_words: [{ value: 'Nine Thousand Rupees Only', disabled: true}],
    });
    this.r1c4 = this._formBuilder.group({
      amount: [{ value: '₹9000.00', disabled: true }],
    });

//----------------------------------------------------------------------------------------------

    this.r2c1 = this._formBuilder.group({
      admission_no: [{ value: '', disabled: false}],
    });

//----------------------------------------------------------------------------------------------

    this.r3c1 = this._formBuilder.group({

    });
    this.r3c2 = this._formBuilder.group({

    });
    this.r3c3 = this._formBuilder.group({

    });
    this.r3c4 = this._formBuilder.group({

    });
  }

  view(){
    console.log(this.r2c1.value.admission_no)
    var response = this.student.getStudentById({admission_no: this.r2c1.value.admission_no})
    response.subscribe(res => {
      console.log(res)
      if(res == null){
        this.openDialog('Invalid Admission Number')
      }

      else {
        this.data = res
        this.name = this.data.fName +' '+ this.data.lName
        this.class = this.data.class.slice(5)
        this.section = this.data.section
      }
    })
  }

  somethingChanged(){
    if (this.selectedTerm === 'Term 3'){
      console.log(this.data.consession)
      this.amount = (9000 - parseInt(this.data.consession)).toString()
    }

    else {
      this.amount = '9000'
    }
    console.log(this.selectedTerm)
  }

  print(){
    window.print()
  }

  generate(){
    var data = {
      receipt_no : 'RCPT00'+Math.floor((Math.random() * 1000000) + 1),
      admission_no :  this.r2c1.value.admission_no,
      status : 'Not Paid',
      generated_on: new Date(),
      paid_on : '',
      amount: this.amount,
      paid_through: ''
    }
    var response = this.receipt.createReceipt(data)
    response.subscribe(res => {
      console.log(res)
    })
  }

  openDialog(reason: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '400px', data: { action : 'delete', reason : reason},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

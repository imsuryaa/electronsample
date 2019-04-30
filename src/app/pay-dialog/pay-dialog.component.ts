import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pay-dialog',
  templateUrl: './pay-dialog.component.html',
  styleUrls: ['./pay-dialog.component.css']
})
export class PayDialogComponent implements OnInit {
  r1c1 : FormGroup
  selectedType: string;
  types: string[] = ['Card', 'Cash', 'Cheque', 'Demand Draft' , 'Money Order'];
  constructor(public dialogRef : MatDialogRef<PayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder : FormBuilder
  ) {
  }

  ngOnInit() {
    this.r1c1 = this._formBuilder.group({
        txn_id: [{value: '', disabled: false }],
    })
  }

  onNoClick() {
    this.dialogRef.close();
    return false
  }

  onYesClick() {
    if(this.r1c1.value.txn_id === ''){
      
    }
    else{
      this.dialogRef.close();
    }

  }

}

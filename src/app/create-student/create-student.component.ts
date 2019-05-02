import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { StudentService } from '../student.service';
import { UploadService } from '../upload.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  categories = ['General','OBC','Special','Physically Challenged']
  selectedCategory: any

  classes = ['Class 10th','Class 9th','Class 8th','Class 7th','Class 6th','Class 5th','Class 4th','Class 3rd','Class 2nd','Class 1st','UKG','LKG']
  selectedClass: any

  genders = ['Male','Female','Other']
  selectedGender: any

  sections = ['A','B','C','D']
  selectedSection: any

  bloodGroups = ['A+','B+','AB+','O+','A-','B-','AB-','O-']
  selectedBloodGroup: any

  houses = ['Red','Blue','Green','Yellow']
  selectedHouse: any

  types = ['Hosteller','Day Scholar']
  selectedType: any

  hostels = ['Boys 101','Boys 201','Girls 101','Girls 201']
  selectedHostel : any
  rooms = ['01','02','03','04','05']
  selectedRoom : any

  verifications = ['Aadhaar','Passport','PAN','Ration Card','Driving License','Birth Certificate']
  selectedParentIdProof: any
  selectedParentAddressProof: any

  selectedGuardianIdProof: any
  selectedGuardianAddressProof: any

  selectedStudentIdProof: any
  selectedStudentAddressProof: any

  r1c1: FormGroup;
  r1c2: FormGroup;
  r1c3: FormGroup;
  r1c4: FormGroup;

  r2c1: FormGroup;
  r2c2: FormGroup;
  r2c3: FormGroup;
  r2c4: FormGroup;

  r3c1: FormGroup;
  r3c2: FormGroup;
  r3c3: FormGroup;
  r3c4: FormGroup;

  parent: FormGroup;
  guardian: FormGroup;
  student: FormGroup;

  r4c1: FormGroup;
  r4c2: FormGroup;
  r4c3: FormGroup;
  r4c4: FormGroup;

  file : File
  file2 : File

  sdoc1 : File
  sdoc2 : File
  gdoc1 : File
  gdoc2 : File
  pdoc1 : File
  pdoc2 : File

  constructor(private _formBuilder: FormBuilder, private students : StudentService, private uploader : UploadService, public dialog : MatDialog) {

  }

  ngOnInit() {
    this.r1c1 = this._formBuilder.group({
      admission_no: [{value: 'PORD01253', disabled: false }],
      fName: [{ value: 'Akhil', disabled: false }],
      as_on: [{ value: new Date(), disabled: true }],
      height: [{ value: '117cm', disabled: false}],
    });
    this.r1c2 = this._formBuilder.group({
      roll_no: [{ value: '23', disabled: false}],
      lName: [{ value: 'Vijjapu', disabled: false}],
      photo: [{ value: '[PHOTO]', disabled: true }],
      weight: [{ value: '45kg', disabled: false}],
      religion: [{ value: 'Hindu', disabled: false}],
    });
    this.r1c3 = this._formBuilder.group({
      phone: [{ value: '-', disabled: false}],
      as_on: [{ value: new Date(), disabled: true }],
    });
    this.r1c4 = this._formBuilder.group({
      dob: [{ value: new Date(), disabled: true }],
      email: [{ value: 'vsushant97@gmail.com', disabled: true }],
    });

    this.r2c1 = this._formBuilder.group({
      father_name: [{value: 'Mahesh Vijjapu', disabled: false }],
      mother_name: [{ value: 'Devi Vijjapu', disabled: false }],
    });
    this.r2c2 = this._formBuilder.group({
      father_phone: [{ value: '9949387144', disabled: false}],
      mother_phone: [{ value: '7894561230', disabled: false}],
    });
    this.r2c3 = this._formBuilder.group({
      father_occ: [{ value: 'Doctor', disabled: false}],
      mother_occ: [{ value: 'Doctor', disabled: false }],
    });
    this.r2c4 = this._formBuilder.group({
      father_photo: [{ value: '[PHOTO]', disabled: true }],
      mother_photo: [{ value: '[PHOTO]', disabled: true }],
    });

    this.r3c1 = this._formBuilder.group({
      guardian_name: [{value: 'Nikhil Vijjapu', disabled: false }],
      guardian_phone: [{ value: '4567891325', disabled: false }],
    });
    this.r3c2 = this._formBuilder.group({
      guardian_relation: [{ value: 'Brother', disabled: false}],
      guardian_occ: [{ value: 'Software Engineer', disabled: false}],
    });
    this.r3c3 = this._formBuilder.group({
      guardian_email: [{ value: 'guardian@angel.com', disabled: false}],
      guardian_address: [{ value: 'Flat 802, VIP Towers, Siripuram, Visakhapatnam', disabled: false }],
    });
    this.r3c4 = this._formBuilder.group({
      guardian_photo: [{ value: '[PHOTO]', disabled: true }],
    });

    this.parent = this._formBuilder.group({
      pdoc1: [''],
      pdoc2: [''],
    });
    this.guardian = this._formBuilder.group({
      gdoc1: [''],
      gdoc2: [''],
    });
    this.student = this._formBuilder.group({
      sdoc1: [''],
      sdoc2: [''],
    });

    this.r4c1 = this._formBuilder.group({
      tution_fee: [{ value: '₹9000.00', disabled: true}],
    });
    this.r4c2 = this._formBuilder.group({
      hostel_fee: [{ value: '₹0.00', disabled: true}],
    });
    this.r4c3 = this._formBuilder.group({
      caution_deposit: [{ value: '₹5000.00', disabled: true }],
    });
    this.r4c4 = this._formBuilder.group({
      consession: [{ value: '0', disabled: false }],
    });
  }

  change(){
    if(this.selectedType === 'Hosteller'){
      this.r4c2.setValue({hostel_fee : '₹9000.00'})
    }

    else {
      this.r4c2.setValue({hostel_fee : '₹0.00'})
    }
  }

  save(){

    var data = Object.assign({},
      this.r1c1.value,
      this.r1c1.value,
      this.r1c2.value,
      this.r1c3.value,
      this.r1c4.value,
      this.r2c1.value,
      this.r2c2.value,
      this.r2c3.value,
      this.r2c4.value,
      this.r3c1.value,
      this.r3c2.value,
      this.r3c3.value,
      this.r3c4.value,
      {
        as_on: new Date(),
        class: this.selectedClass,
        consession: this.r4c4.value.consession,
        gender:this.selectedGender,
        hostel: this.selectedHostel,
        house: this.selectedHouse,
        room: this.selectedRoom,
        section: this.selectedSection,
        type: this.selectedType
      }
    )
    console.log(data)

    var response = this.students.createStudent(data)
    response.subscribe(res => {
      console.log(res)
      this.openDialog('Admission Successful')
    })
  }

  onFileChanged(event) {
    console.log(event.target.name)
    if(event.target.name === 'sdoc1'){
      this.sdoc1 = event.target.files[0]
    }

    if(event.target.name === 'sdoc2'){
      this.sdoc2 = event.target.files[0]
    }

    if(event.target.name === 'gdoc1'){
      this.gdoc1 = event.target.files[0]
    }

    if(event.target.name === 'gdoc2'){
      this.gdoc2 = event.target.files[0]
    }

    if(event.target.name === 'pdoc1'){
      this.pdoc1 = event.target.files[0]
    }

    if(event.target.name === 'pdoc2'){
      this.pdoc2 = event.target.files[0]
    }
  }

  upload(){

    console.log('Clicked Upload')

    if(this.sdoc1 === undefined || this.sdoc2 === undefined || this.gdoc1 === undefined || this.gdoc2 === undefined || this.pdoc1 === undefined || this.pdoc2 === undefined){
      this.openDialog('Upload All Files')
    }

    else {
      const uploadData = new FormData();

      var files = ['sdoc1','sdoc2','gdoc1','gdoc2','pdoc1','pdoc2']

      for (var i = 0 ; i < files.length ; i++){
        if(files[i] === 'sdoc1'){
          uploadData.append(files[i], this.sdoc1, this.sdoc1.name);
        }

        if(files[i] === 'sdoc2'){
          uploadData.append(files[i], this.sdoc2, this.sdoc2.name);
        }

        if(files[i] === 'gdoc1'){
          uploadData.append(files[i], this.gdoc1, this.gdoc1.name);
        }

        if(files[i] === 'gdoc2'){
          uploadData.append(files[i], this.gdoc2, this.gdoc2.name);
        }

        if(files[i] === 'pdoc1'){
          uploadData.append(files[i], this.pdoc1, this.pdoc1.name);
        }

        if(files[i] === 'pdoc2'){
          uploadData.append(files[i], this.pdoc2, this.pdoc2.name);
        }
      }

      console.log(uploadData)
      var resp = this.uploader.upload(uploadData)
      resp.subscribe(res => {
        console.log(res)
      })
    }
  }

  openDialog(reason): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '400px', data: { action : 'delete', reason : reason},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

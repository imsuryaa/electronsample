import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {
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

  constructor(private _formBuilder : FormBuilder) { }

  ngOnInit() {

    this.r1c1 = this._formBuilder.group({
      admission_no: [{value: 'PORD01253', disabled: false }],
      fName: [{ value: 'Akhil', disabled: false }],
      as_on: [{ value: new Date(), disabled: true }],
    });

    this.r1c2 = this._formBuilder.group({
      dob: [{ value: new Date(), disabled: true }],
      lName: [{ value: 'Vijjapu', disabled: false}],
      photo: [{ value: '[PHOTO]', disabled: true }],
      religion: [{ value: 'Hindu', disabled: false}],
      email: [{ value: 'vsushant97@gmail.com', disabled: true }],
    });

    this.r1c3 = this._formBuilder.group({
      phone: [{ value: '-', disabled: false}],
      dob: [{ value: new Date(), disabled: true }],
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

}

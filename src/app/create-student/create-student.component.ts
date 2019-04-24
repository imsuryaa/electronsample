import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  options: FormGroup;

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

  constructor(private _formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.r1c1 = this._formBuilder.group({
      admissionNo: [{value: 'PORD01254', disabled: false }],
      fName: [{ value: 'Nikita', disabled: false }],
      admissionDate: [{ value: new Date(), disabled: true }],
      height: [{ value: '125cm', disabled: false}],
    });
    this.r1c2 = this._formBuilder.group({
      roll: [{ value: '36', disabled: false}],
      lName: [{ value: 'Varma', disabled: false}],
      photo: [{ value: '[PHOTO]', disabled: true }],
      weight: [{ value: '50kg', disabled: false}],
      religion: [{ value: 'Hindu', disabled: false}],
    });
    this.r1c3 = this._formBuilder.group({
      phone: [{ value: '8466811378', disabled: false}],
      as_on: [{ value: new Date(), disabled: true }],
    });
    this.r1c4 = this._formBuilder.group({
      dob: [{ value: new Date(), disabled: true }],
      email: [{ value: 'suryatejaj97@gmail.com', disabled: true }],
    });

    this.r2c1 = this._formBuilder.group({
      father_name: [{value: 'Rahul Varma', disabled: false }],
      mother_name: [{ value: 'Sakshi Varma', disabled: false }],
    });
    this.r2c2 = this._formBuilder.group({
      father_phone: [{ value: '7013905792', disabled: false}],
      mother_phone: [{ value: '9701167651', disabled: false}],
    });
    this.r2c3 = this._formBuilder.group({
      father_occ: [{ value: 'Software Engineer', disabled: false}],
      mother_occ: [{ value: 'Business', disabled: false }],
    });
    this.r2c4 = this._formBuilder.group({
      father_photo: [{ value: '[PHOTO]', disabled: true }],
      mother_photo: [{ value: '[PHOTO]', disabled: true }],
    });

    this.r3c1 = this._formBuilder.group({
      guardian_name: [{value: 'Sreedhar Varma', disabled: false }],
      guardian_phone: [{ value: '9949387144', disabled: false }],
    });
    this.r3c2 = this._formBuilder.group({
      guardian_relation: [{ value: 'Brother', disabled: false}],
      guardian_occ: [{ value: 'Advocate', disabled: false}],
    });
    this.r3c3 = this._formBuilder.group({
      guardian_email: [{ value: 'guardian@angel.com', disabled: false}],
      guardian_address: [{ value: '39-8-11/12, Jeetu Apartments, Muralinagar, Vizag', disabled: false }],
    });
    this.r3c4 = this._formBuilder.group({
      guardian_photo: [{ value: '[PHOTO]', disabled: true }],
    });

    this.parent = this._formBuilder.group({
      pdoc1: [{ value: '[DOCUMENT]', disabled: true}],
      pdoc2: [{ value: '[DOCUMENT]', disabled: true}],
    });
    this.guardian = this._formBuilder.group({
      gdoc1: [{ value: '[DOCUMENT]', disabled: true}],
      gdoc2: [{ value: '[DOCUMENT]', disabled: true}],
    });
    this.student = this._formBuilder.group({
      sdoc1: [{ value: '[DOCUMENT]', disabled: true }],
      sdoc2: [{ value: '[DOCUMENT]', disabled: true }],
    });
  }
}

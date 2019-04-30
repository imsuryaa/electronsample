import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnectionService } from './connection.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url: string
  constructor(private http : HttpClient, private connect : ConnectionService) {
    this.url = this.connect.getDbUrl()
  }

  createStudent(data: any){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.post(this.url+'/api/student/create',data)
  }

  getStudentById(data: any){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.post(this.url+'/api/student/getById',data)
  }

  getAllStudents(){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.get(this.url+'/api/student/getAll')
  }

  getCount(data){
    return this.http.post(this.url+'/api/student/count',data)
  }
}

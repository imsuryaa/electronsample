import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConnectionService } from './connection.service';


@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  url: string
  constructor(private http : HttpClient, private connect : ConnectionService) {
    this.url = this.connect.getDbUrl()
  }

  createReceipt(data: any){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.post(this.url+'/api/receipt/create',data)
  }

  getReceiptById(data: any){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.post(this.url+'/api/receipt/getById',data)
  }

  getAllReceipts(){
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
    })
    return this.http.get(this.url+'/api/receipt/getAll')
  }

  getCount(data){
    return this.http.post(this.url+'/api/receipt/count',data)
  }
}

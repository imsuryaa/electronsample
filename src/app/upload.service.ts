import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url: string
  constructor(private http : HttpClient, private connect : ConnectionService) {
    this.url = this.connect.getDbUrl()
  }

  upload(file){
    return this.http.post<any>(this.url+'/upload', file)
  }
}

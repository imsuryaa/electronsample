import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = 'http://192.168.0.10:6900'
  constructor() { }
  
  getDbUrl(){
    return this.url
  }
}

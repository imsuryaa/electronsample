import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = 'http://skylark9704.tplinkdns.com:6900'
  constructor() { }

  getDbUrl(){
    return this.url
  }
}

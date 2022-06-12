import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiName: HttpClient) { }
  nameToFind?:string;
  
  getName() {
    return this.apiName.get(`https://api.genderize.io/?name=${this.nameToFind}`);
  }
}

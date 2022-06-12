import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apiName: HttpClient) { }
  
  getName() {
    return this.apiName.get('https://api.genderize.io/?name=nomedaricercare');
  }
}

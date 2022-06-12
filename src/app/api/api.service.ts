import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../models/gender';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getName(name: string): Observable<Gender> {
    return this.http.get<Gender>(`https://api.genderize.io/?name=${name}`);
  }

}

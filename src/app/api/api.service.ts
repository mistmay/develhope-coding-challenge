import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRandomActivity(): Observable<Activity> {
    return this.http.get<Activity>('https://www.boredapi.com/api/activity')

  }

}

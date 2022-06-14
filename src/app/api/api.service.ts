import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/cocktail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getSearchResult(searchKey: string): Observable<Response> {
    return this.http.get<Response>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchKey}`);
  }

}

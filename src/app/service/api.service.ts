import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../models/endpoints.model';
import { Response } from '../models/movie';
import { GenreResponse } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "https://api.themoviedb.org/3"
  private apiKey = environment.api

  constructor(private http: HttpClient) { }

  getItems(endpoint: Endpoint): Observable<Response> {
    return this.http.get<Response>(`${this.url}${endpoint}`, {
      params: { api_key: this.apiKey }
    })
  }

  getGenres(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>("https://api.themoviedb.org/3/genre/movie/list?api_key=9357268c262a35e41df4cb3774d28301", {
      params: { api_key: this.apiKey }
    })
  }

}

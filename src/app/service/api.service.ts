import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoint } from '../models/endpoints.model';
import { Movie, Response } from '../models/movie';
import { GenreResponse } from '../models/genre';
import { Waifu, WaifuResponse } from '../models/waifu.model';

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
    return this.http.get<GenreResponse>(`${this.url}/genre/movie/list`, {
      params: { api_key: this.apiKey }
    })
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movie/${id}`, {
      params: { api_key: this.apiKey }
    })
  }

  getWaifu(): Observable<WaifuResponse> {
    return this.http.get<WaifuResponse>(`https://api.waifu.im/random/`)
  }
  
}

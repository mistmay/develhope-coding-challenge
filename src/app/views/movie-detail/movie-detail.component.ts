import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, catchError, throwError } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/app/service/api.service';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  currentMovie$!: Observable<Movie>  
  errorObject = null;
  showError = false

  constructor(private api: ApiService, private activedRoute: ActivatedRoute, private favorites: FavoriteService) { }

  ngOnInit(): void {
    this.currentMovie$ = this.activedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => this.api.getMovie(+params.get("id")!)),
      catchError(err => {
        this.errorObject = err;
        this.showError = true
        return throwError(err);
      })
  )}

  getGenresLength(): number {
    return this.favorites.getArrayLength()
  }

  getGenre(id:number): string {
    return this.favorites.getGenre(id)
  }
  

}

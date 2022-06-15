import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from './models/movie';
import { FavoriteService } from './service/favorite.service';
import { ApiService } from './service/api.service';
import { Subscription } from 'rxjs';
import { Genre, GenreResponse } from './models/genre';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  constructor(private favoriteService: FavoriteService, private api: ApiService) { }

  ngOnInit(): void {
    if (localStorage['favoriteMovies']) {
      const localStorageArray: Movie[] = JSON.parse(localStorage.getItem('favoriteMovies') || "");
      if (localStorageArray.length > 0) {
        localStorageArray.forEach((movie: Movie) => {
          this.favoriteService.addFavorite(movie);
        });
      }
    }
    this.subscription = this.api.getGenres().subscribe((res: GenreResponse) => {
      this.favoriteService.setGenres(res.genres);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

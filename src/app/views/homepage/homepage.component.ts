import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Endpoint } from 'src/app/models/endpoints.model';
import { ApiService } from 'src/app/service/api.service';
import { Response, Movie } from 'src/app/models/movie';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  popular!: Movie[];
  top_rated!: Movie[];
  upcoming!: Movie[];
  subscription: Subscription[] = [];
  favorites!: Movie[];
  searchedKey: string = '';


  constructor(private api: ApiService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.subscription.push(
      this.favoriteService.getFavoritesSubject().subscribe((res: Movie[]) => {
        this.favorites = res;
        this.checkFavorites();
      }));
    this.subscription.push(this.api.getItems(Endpoint.popular).subscribe((res: Response) => {
      const response: Movie[] = res.results;
      const result: Movie[] = [];
      response.forEach((element: Movie) => {
        result.push({ ...element, isFavorite: false });
      });
      this.popular = result;
      this.checkFavorites();
    }));
    this.subscription.push(this.api.getItems(Endpoint.top_rated).subscribe((res: Response) => {
      const response: Movie[] = res.results;
      const result: Movie[] = [];
      response.forEach((element: Movie) => {
        result.push({ ...element, isFavorite: false });
      });
      this.top_rated = result;
      this.checkFavorites();
    }));
    this.subscription.push(this.api.getItems(Endpoint.upcoming).subscribe((res: Response) => {
      const response: Movie[] = res.results;
      const result: Movie[] = [];
      response.forEach((element: Movie) => {
        result.push({ ...element, isFavorite: false });
      });
      this.upcoming = result;
      this.checkFavorites();
    }));
  }

  ngOnDestroy(): void {
    this.subscription.forEach((element: Subscription) => {
      element.unsubscribe();
    });
  }

  checkFavorites(): void {
    if (this.popular) {
      this.popular.forEach((movie: Movie) => {
        movie.isFavorite = false;
        this.favorites.forEach((favorite: Movie) => {
          if (movie.id === favorite.id) {
            movie.isFavorite = true;
          }
        });
      });
    }
    if (this.top_rated) {
      this.top_rated.forEach((movie: Movie) => {
        movie.isFavorite = false;
        this.favorites.forEach((favorite: Movie) => {
          if (movie.id === favorite.id) {
            movie.isFavorite = true;
          }
        });
      });
    }
    if (this.upcoming) {
      this.upcoming.forEach((movie: Movie) => {
        movie.isFavorite = false;
        this.favorites.forEach((favorite: Movie) => {
          if (movie.id === favorite.id) {
            movie.isFavorite = true;
          }
        });
      });
    }
  }

}

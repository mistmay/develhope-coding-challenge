import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from 'src/app/models/genre';
import { Movie } from 'src/app/models/movie';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites!: Movie[];
  subscriptions: Subscription[] = [];

  constructor(private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.favoriteService.getFavoritesSubject()
        .subscribe((res: Movie[]) => {
          this.favorites = res;
          console.log(this.favorites)
        }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  deleteFavorite(id: number) {
    this.favoriteService.deleteFavorite(id)
  }

}

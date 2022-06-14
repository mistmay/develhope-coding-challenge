import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-favorite-cocktails',
  templateUrl: './favorite-cocktails.component.html',
  styleUrls: ['./favorite-cocktails.component.scss']
})
export class FavoriteCocktailsComponent implements OnInit, OnDestroy {

  favorite!: Cocktail[];
  subscriptions!: Subscription;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.subscriptions = this.cocktailService.getFavoritesSubject()
      .subscribe((cocktail: Cocktail[]) => {
        this.favorite = cocktail
      });
  }

  deleteFavorite(id: string) {
    this.cocktailService.deleteFavorite(id);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

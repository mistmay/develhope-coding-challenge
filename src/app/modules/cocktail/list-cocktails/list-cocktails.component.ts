import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Response, Cocktail } from 'src/app/models/cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';
import { ApiService } from 'src/app/api/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoSpaceValidator } from 'src/app/validators/no-space-validator';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.scss']
})
export class ListCocktailsComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  favorites!: Cocktail[];
  currentList!: Cocktail[] | undefined;
  subscriptions: Subscription[] = [];
  showFirstResult: boolean = false;

  constructor(private api: ApiService, private cocktailService: CocktailService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.cocktailService.getFavoritesSubject()
        .subscribe((res: Cocktail[]) => {
          this.favorites = res;
          this.checkFavorite();
        }));
    this.form = this.fb.group({
      search: ['', Validators.compose([Validators.required, NoSpaceValidator()])]
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  checkFavorite(): void {
    if (this.currentList) {
      this.currentList.forEach((cocktail: Cocktail) => {
        this.favorites.forEach((favorite: Cocktail) => {
          if (cocktail.idDrink === favorite.idDrink) {
            cocktail.isFavorite = true;
          } else {
            cocktail.isFavorite = false;
          }
        });
      });
    }
  }

  search(): void {
    this.showFirstResult = true;
    this.subscriptions.push(
      this.api.getSearchResult(this.form.value.search.trim().toLowerCase())
        .subscribe((res: Response) => {
          if (res.drinks === null) {
            this.currentList = undefined
          } else {
            const response: Cocktail[] = res.drinks;
            const result: Cocktail[] = [];
            response.forEach((element: Cocktail) => {
              result.push({ ...element, isFavorite: false });
            });
            this.currentList = result;
            this.checkFavorite();
            this.form.reset();
          }
        }));
  }

  addFavorite(cocktail: Cocktail): void {
    cocktail.isFavorite = true;
    this.cocktailService.addFavorite(cocktail);
  }

}

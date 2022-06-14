import { Component, OnInit } from '@angular/core';
import { Cocktail } from './models/cocktail';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    if (localStorage['favoriteCocktails']) {
      const localStorageArray: Cocktail[] = JSON.parse(localStorage.getItem('favoriteCocktails') || "");
      if (localStorageArray.length > 0) {
        localStorageArray.forEach((cocktail: Cocktail) => {
          this.cocktailService.addFavorite(cocktail);
        });
      }
    }
  }

}

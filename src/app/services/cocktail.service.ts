import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  favorites: Cocktail[] = [];
  favoritesSubject: BehaviorSubject<Cocktail[]> = new BehaviorSubject<Cocktail[]>([]);

  constructor() { }

  getFavoritesSubject(): Observable<Cocktail[]> {
    return this.favoritesSubject.asObservable();
  }

  addFavorite(cocktail: Cocktail): void {
    this.favorites.push(cocktail);
    this.favoritesSubject.next(this.favorites);
    localStorage.setItem('favoriteCocktails', JSON.stringify(this.favorites));
  }

  deleteFavorite(id: string): void {
    this.favorites = this.favorites.filter((cocktail: Cocktail) => cocktail.idDrink !== id);
    this.favoritesSubject.next(this.favorites);
    localStorage.setItem('favoriteCocktails', JSON.stringify(this.favorites));
  }

}

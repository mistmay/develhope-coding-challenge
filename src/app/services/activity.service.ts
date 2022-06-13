import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  @Output() deleteCheck: EventEmitter<string> = new EventEmitter<string>();
  favorites: Activity[] = [];
  favoritesSubject: BehaviorSubject<Activity[]> = new BehaviorSubject<Activity[]>([]);

  constructor() { }

  getFavoritesSubject(): Observable<Activity[]> {
    return this.favoritesSubject.asObservable();
  }

  addFavorite(activity: Activity): void {
    this.favorites.push(activity);
    this.favoritesSubject.next(this.favorites);
    localStorage.setItem('favoriteActivities', JSON.stringify(this.favorites));
  }

  deleteFavorite(key: string): void {
    this.favorites = this.favorites.filter((activity: Activity) => activity.key !== key);
    this.favoritesSubject.next(this.favorites);
    localStorage.setItem('favoriteActivities', JSON.stringify(this.favorites));
    this.deleteCheck.emit(key);
  }

}

import { Injectable } from '@angular/core';
import { Gender } from '../models/gender';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchHistory: Gender[] = [];
  searchHistorySubject: BehaviorSubject<Gender[]> = new BehaviorSubject<Gender[]>([]);
  currentId: number = 1;
  currentIdSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() { }

  getSearchHistorySubject(): Observable<Gender[]> {
    return this.searchHistorySubject.asObservable();
  }

  getCurrentIdSubject(): Observable<number> {
    return this.currentIdSubject.asObservable();
  }

  addSearch(name: Gender): void {
    this.searchHistory.push(name);
    this.searchHistorySubject.next(this.searchHistory);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

  deleteSearch(id: number): void {
    this.searchHistory = this.searchHistory.filter((search: Gender) => search.id !== id);
    this.searchHistorySubject.next(this.searchHistory);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
  }

  incrementId(): void {
    this.currentId++;
    this.currentIdSubject.next(this.currentId);
    localStorage.setItem('currentId', String(this.currentId));
  }

  setCurrentId(number: number): void {
    this.currentId = number;
    this.currentIdSubject.next(this.currentId);
    localStorage.setItem('currentId', String(this.currentId));
  }

  emptyTable(): void {
    this.searchHistory = [];
    this.searchHistorySubject.next(this.searchHistory);
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    alert('Table is Empty!');
  }

}

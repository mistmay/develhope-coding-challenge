import { Component, OnInit } from '@angular/core';
import { Gender } from './models/gender';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    if (localStorage['searchHistory']) {
      const localStorageArray: Gender[] = JSON.parse(localStorage.getItem('searchHistory') || "");
      if (localStorageArray.length > 0) {
        localStorageArray.forEach((name: Gender) => {
          this.searchService.addSearch(name);
        });
      }
    }
    if (localStorage['currentId']) {
      this.searchService.setCurrentId(Number(localStorage.getItem('currentId')));
    }
  }
}

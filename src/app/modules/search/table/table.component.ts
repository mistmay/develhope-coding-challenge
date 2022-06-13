import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gender } from 'src/app/models/gender';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  searchHistory!: Gender[];
  subscription!: Subscription;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.subscription = this.searchService.getSearchHistorySubject()
      .subscribe((res: Gender[]) => {
        this.searchHistory = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteSearch(id: number | undefined): void {
    if (typeof (id) === 'number') {
      this.searchService.deleteSearch(id);
    }
  }

  getBackground(probability: number): string {
    const prob: number = probability * 100;
    if (prob <= 40) {
      return 'red';
    } else if (prob > 40 && prob < 70) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

}

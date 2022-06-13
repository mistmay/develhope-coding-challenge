import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/services/activity.service';


@Component({
  selector: 'app-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.scss']
})
export class FavoriteActivityComponent implements OnInit, OnDestroy {
  favorites!: Activity[];
  subscription!: Subscription;
 
  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    this.subscription = this.activityService.getFavoritesSubject()
      .subscribe((res: Activity[]) => {
        this.favorites = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  deleteFavorite(key: string): void {
    this.activityService.deleteFavorite(key);
  
  }

}

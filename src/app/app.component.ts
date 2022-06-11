import { Component, OnInit } from '@angular/core';
import { Activity } from './models/activity';
import { ActivityService } from './services/activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    if (localStorage['favoriteActivities']) {
      const localStorageArray: Activity[] = JSON.parse(localStorage.getItem('favoriteActivities') || "");
      if (localStorageArray.length > 0) {
        localStorageArray.forEach((activity: Activity) => {
          this.activityService.addFavorite(activity)
        });
      }
    }
  }

}

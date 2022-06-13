import { Subscription } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { ApiService } from './../../../api/api.service';

import { ActivityService } from './../../../services/activity.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.scss']
})
export class GenerateActivityComponent implements OnInit, OnDestroy {
  activities!: Activity[];
  subscriptions: Subscription[] = [];
  currentActivity!: Activity;
  btnDisable: boolean = false;

  constructor(private activity: ActivityService, private api: ApiService) { }

  ngOnInit(): void {
    this.activity.getFavoritesSubject().subscribe((res: Activity[]) => {
      this.activities = res;
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    })
  }

  addFavorite() {
    this.activity.addFavorite(this.currentActivity)
    this.btnDisable = true;
  }

  randomActivity() {
    this.subscriptions.push(this.api.getRandomActivity()
      .subscribe((res: Activity) => {
        let isDouble: boolean = false;
        this.activities.forEach((activity: Activity) => {
          if (activity.key === res.key) {
            isDouble = true;
          }
        });
        if (isDouble) {
          this.randomActivity()
        } else {
          this.currentActivity = res;
          this.btnDisable = false;
        }
      }));
  }
}

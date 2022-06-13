import { ApiService } from './../../../api/api.service';

import { ActivityService } from './../../../services/activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.scss']
})
export class GenerateActivityComponent implements OnInit {

  constructor(private activity:ActivityService, private api: ApiService) { }
  activityGenerator:boolean  = true

  activities: [] = []
  ngOnInit(): void {
  }
  showActivityGenerator(){
    this.activityGenerator = !this.activityGenerator
  }
  addFavorite(){
    this.activity.addFavorite
  }
  randomActivity(){
    this.api.getRandomActivity
  }
}

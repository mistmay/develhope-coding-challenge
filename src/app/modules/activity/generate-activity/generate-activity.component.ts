import { ApiService } from './../../../api/api.service';

import { ActivityService } from './../../../services/activity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.scss']
})
export class GenerateActivityComponent implements OnInit {

  constructor(private activity:ActivityService,) { }
  activityGenerator:boolean  = true
  ngOnInit(): void {
  }
  showActivityGenerator(){
    this.activityGenerator = !this.activityGenerator
  }
  addFavorite(){
    this.activity.addFavorite
  }
  randomActivity(){
  
  }
}

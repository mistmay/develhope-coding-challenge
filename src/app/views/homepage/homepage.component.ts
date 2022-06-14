import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Endpoint } from 'src/app/models/endpoints.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  popular: any[] = []
  top_rated: any [] = []
  upcoming: any [] = []
  trending: any [] = []
  originals: any [] = []
  subscription: Subscription[] = []


  constructor(private api: ApiService) { }

  ngOnInit(): void {
   this.subscription.push(this.api.getItems(Endpoint.popular).subscribe((res: any) => this.popular = res.results))
   this.subscription.push(this.api.getItems(Endpoint.top_rated).subscribe((res: any) => this.top_rated = res.results))
   this.subscription.push(this.api.getItems(Endpoint.upcoming).subscribe((res: any) => this.upcoming = res.results))
   this.subscription.push(this.api.getItems(Endpoint.trending).subscribe((res: any) => this.trending = res.results))
   this.subscription.push(this.api.getItems(Endpoint.originals).subscribe((res: any) => this.originals = res.results))
  }

}

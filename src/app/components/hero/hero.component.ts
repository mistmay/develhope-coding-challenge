import { Component, OnDestroy, OnInit } from '@angular/core';
import { Endpoint } from 'src/app/models/endpoints.model';
import { ApiService } from "../../service/api.service"
import { Movie, Response } from 'src/app/models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  items!: Movie[];
  subscription!: Subscription;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.subscription = this.api.getItems(Endpoint.now_playing).subscribe((res: Response) => this.items = res.results);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

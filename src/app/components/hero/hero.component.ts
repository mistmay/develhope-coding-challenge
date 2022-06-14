import { Component, OnInit } from '@angular/core';
import { Endpoint } from 'src/app/models/endpoints.model';
import { ApiService } from "../../service/api.service"

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {


  items: any[] = []

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getNowPlaying()
  }

  getNowPlaying() {
    return this.api.getItems(Endpoint.now_playing).subscribe((res: any) => this.items = res.results)
  }

}

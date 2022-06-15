import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Waifu, WaifuResponse } from 'src/app/models/waifu.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-waifu',
  templateUrl: './waifu.component.html',
  styleUrls: ['./waifu.component.scss']
})
export class WaifuComponent implements OnInit {

  waifu$!: Observable<WaifuResponse>

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.newWaifu()
  }

  newWaifu() {
    this.waifu$ = this.api.getWaifu()
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item!: Movie;
  wow: HTMLAudioElement = new Audio('../../../../assets/mp3/wow.mp3');

  constructor(private favoriteService: FavoriteService, private router: Router) { }

  ngOnInit(): void {
  }

  addFavorite(movie: Movie): void {
    movie.isFavorite = true;
    this.favoriteService.addFavorite(movie);
    this.wow.play();
  }

  deleteFavorite(id: number): void {
    this.favoriteService.deleteFavorite(id);
  }

  goToDetails(): void {
    this.router.navigate(['/details', this.item.id]);
  }

}

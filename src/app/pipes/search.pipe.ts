import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Movie[], searchedKey: string): Movie[] {
    if (searchedKey.trim() === '') {
      return value;
    } else {
      return value.filter((movie: Movie) => movie.title.trim().toLowerCase().includes(searchedKey.trim().toLowerCase()));
    }
  }

}

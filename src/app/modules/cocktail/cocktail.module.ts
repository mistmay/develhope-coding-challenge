import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCocktailsComponent } from './list-cocktails/list-cocktails.component';
import { FavoriteCocktailsComponent } from './favorite-cocktails/favorite-cocktails.component';



@NgModule({
  declarations: [
    ListCocktailsComponent,
    FavoriteCocktailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListCocktailsComponent,
    FavoriteCocktailsComponent
  ]
})
export class CocktailModule { }

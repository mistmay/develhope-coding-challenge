import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCocktailsComponent } from './list-cocktails/list-cocktails.component';
import { FavoriteCocktailsComponent } from './favorite-cocktails/favorite-cocktails.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCocktailsComponent,
    FavoriteCocktailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ListCocktailsComponent,
    FavoriteCocktailsComponent
  ]
})
export class CocktailModule { }

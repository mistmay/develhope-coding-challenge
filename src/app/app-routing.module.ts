import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomepageComponent } from './views/homepage/homepage.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', redirectTo: "home", pathMatch: "full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

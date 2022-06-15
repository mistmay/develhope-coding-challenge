import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './views/error/error.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'details/:id', component: MovieDetailComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HeroComponent } from './components/hero/hero.component';
import { CardComponent } from './components/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { ErrorComponent } from './views/error/error.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FavoritesComponent,
    HeroComponent,
    CardComponent,
    SearchPipe,
    ErrorComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

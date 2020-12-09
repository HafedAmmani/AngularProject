import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { GridComponent } from './grid/grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GridcartComponent } from './gridcart/gridcart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    GridComponent,
    AddMoviesComponent,
    FormUpdateComponent,
    HomePageComponent,
    GridcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

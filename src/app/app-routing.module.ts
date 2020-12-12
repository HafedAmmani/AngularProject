import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';


const routes: Routes = [
  {path : "", redirectTo:"home", pathMatch : 'full'},
  { path: "add", component:AddMoviesComponent},
  { path: "afficher", component:MoviesListComponent},
  {path :"afficher/detail/:id", component:DetailComponent},
  { path: "update/:id", component:FormUpdateComponent},
  { path: "home", component:HomePageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

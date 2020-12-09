import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { AppComponent } from './app.component';
import { FormUpdateComponent } from './form-update/form-update.component';
import { MoviesListComponent } from './movies-list/movies-list.component';


const routes: Routes = [
  { path: "add", component:AddMoviesComponent},
  { path: "afficher", component:MoviesListComponent},
  { path: "update/:id", component:FormUpdateComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

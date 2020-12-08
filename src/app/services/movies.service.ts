import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { movies } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  urlMovies : string ="http://localhost:3000/movies";
  movies : movies[]=[];
  constructor(private http : HttpClient) { }
  getMovies() : movies[]{
    return this.movies;
  }
  getMoviesJson() : Observable<movies[]>{
    //return this.http.get<Product[]>("/assets/products.json");
    return this.http.get<movies[]>(this.urlMovies);
  }
}

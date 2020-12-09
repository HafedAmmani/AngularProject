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
  addmovies (movies: movies): Observable<movies> {
    return this.http.post<movies>(this.urlMovies, movies, this.httpOptions);}

    getMoviesById(id:number){
      return this.http.get<movies>(this.urlMovies+'/'+id);
    }

    updateProduct (id:number,movies: movies): Observable<movies> {
      return this.http.put<movies>(this.urlMovies+'/'+id, movies, this.httpOptions);}

      deleteProduct (p: movies | number): Observable<movies> {
        const id = typeof p === 'number' ? p : p.id;
        const url=this.urlMovies+'/'+id;
        return this.http.delete<movies>(url);
        }
}

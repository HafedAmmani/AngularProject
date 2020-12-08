import { Component, OnInit } from '@angular/core';
import { movies } from '../model/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies : movies[];
  columns : any;

  constructor(private ps: MoviesService) { }


  ngOnInit(): void {
    this.ps.getMoviesJson().subscribe(next=>this.movies=next);



    
  }

}

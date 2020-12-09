import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movies } from '../model/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  @Input() movies: movies;
  Movies : movies[];

  constructor(private ms : MoviesService, private _router:Router) { }

  ngOnInit(): void {
  }
  deleteMovies(m:movies){
    this.ms.deleteProduct(m).subscribe(next=>this.ms.getMoviesJson().subscribe(next=>this.Movies=next));
  }
  

}

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
    this.ms.getMoviesJson().subscribe((data : movies[])=>{
      this.Movies = data;
    })
  }
  deleteMovies(m:movies){
    this.ms.deleteProduct(m).subscribe(res => {
      
    });
  }
  

}

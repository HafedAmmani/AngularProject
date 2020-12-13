import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from '../model/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  valId : string;
  id: number;
  movie : movies;
  constructor(private ar : ActivatedRoute, private ms:MoviesService,private router: Router) { 
    this.ar.paramMap.subscribe(res=>this.valId=res.get('id'), erreur=>console.log("erreur"), ()=>console.log("finish"));
  }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params['postId'];
    this.ms.getMoviesById(Number(this.valId)).subscribe((data: movies)=>{
      this.movie = data;
    });
  }

}

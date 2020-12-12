import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movies } from '../model/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  valId : string;
  constructor(private ar : ActivatedRoute, private ms:MoviesService) { 
    this.ar.paramMap.subscribe(res=>this.valId=res.get('id'), erreur=>console.log("erreur"), ()=>console.log("finish"));
  }

  m : movies = new movies();
  ngOnInit(): void {
  }

}

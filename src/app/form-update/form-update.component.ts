import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { movies } from '../model/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {
  m : movies = new movies();

  moviesform : FormGroup;
  fbuilder : FormBuilder = new FormBuilder();
  
  constructor(private ac:ActivatedRoute, private ms:MoviesService, private _router:Router) { }

  paramId : string;
  ngOnInit(): void {
    this.moviesform = this.fbuilder.group({
      
      title : ['',Validators.required],
      duree :  ['',[Validators.required, Validators.pattern("[1-9]")]],
      categorie : ['',[Validators.required, Validators.minLength(3)]],
      rate :  ['',[Validators.required, Validators.pattern("[1-9]")]]
    })
    this.ac.paramMap.subscribe(res=>{this.paramId=res.get('id');this.ms.getMoviesById(Number(res.get('id'))).subscribe(res=>this.m=res)});
  }
  updateMovies(){
    this.ms.updateProduct(Number(this.paramId),this.m).subscribe(res=>this._router.navigateByUrl("/afficher"));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { movies } from '../model/movies';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  moviesform : FormGroup;
  fbuilder : FormBuilder = new FormBuilder();
  m : movies = new movies();

  
  title = new FormControl('');
  duree = new FormControl('');
  categorie = new FormControl('');
  rate = new FormControl('');

  constructor(private ps:MoviesService,private _router:Router) { }

  ngOnInit(): void {
    this.moviesform = this.fbuilder.group({
      
      title : ['',Validators.required],
      duree :  ['',[Validators.required, Validators.pattern("[1-9]")]],
      categorie : ['',[Validators.required, Validators.minLength(3)]],
      rate :  ['',[Validators.required, Validators.pattern("[1-9]")]]
    })
  }

  addMovies(){
    console.log(this.m);
   // this.newp.emit(this.product);
   this.ps.addmovies(this.m).subscribe(res=>this._router.navigateByUrl("/afficher"));
  }

  resetControls(): void {
    this.moviesform.patchValue({
      title : null,
      duree : null,
      categorie: null,
      rate : null ,
    })
  }

}

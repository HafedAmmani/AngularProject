import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { movies } from '../model/movies';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {

  moviesform : FormGroup;
  fbuilder : FormBuilder = new FormBuilder();
  m : movies = new movies();

  id = new FormControl('');
  title = new FormControl('');
  duree = new FormControl('');
  categorie = new FormControl('');
  rate = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.moviesform = this.fbuilder.group({
      id : ['',Validators.required],
      title : ['',Validators.required],
      duree :  ['',[Validators.required, Validators.pattern("[1-9]")]],
      categorie : ['',[Validators.required, Validators.minLength(3)]],
      rate :  ['',[Validators.required, Validators.pattern("[1-9]")]]
    })
  }


  resetControls(): void {
    this.moviesform.patchValue({
      id : null,
      title : null,
      duree : null,
      categorie: null,
      rate : null ,
    })
  }

}

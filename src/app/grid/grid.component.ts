import { Component, Input, OnInit } from '@angular/core';
import { movies } from '../model/movies';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  @Input() movies: movies;


  constructor() { }

  ngOnInit(): void {
  }

}

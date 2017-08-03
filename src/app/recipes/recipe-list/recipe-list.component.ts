import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'simple desciption', 
    'https://s-media-cache-ak0.pinimg.com/originals/f7/fb/04/f7fb04e865fdc9900f4476364b9292e3.jpg')
  ,
   new Recipe('Test Recipe', 'simple desciption', 
    'https://s-media-cache-ak0.pinimg.com/originals/f7/fb/04/f7fb04e865fdc9900f4476364b9292e3.jpg')
 ];
  constructor() { }

  ngOnInit() {
  }

}

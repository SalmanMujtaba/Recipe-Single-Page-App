import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

//There is a chain of events here. This particular event informs recipe-components
//about the component selected

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'simple desciption', 
    'https://s-media-cache-ak0.pinimg.com/originals/f7/fb/04/f7fb04e865fdc9900f4476364b9292e3.jpg')
  ,
   new Recipe('Second Recipe', 'Second sample desciption', 
    'https://s-media-cache-ak0.pinimg.com/originals/f7/fb/04/f7fb04e865fdc9900f4476364b9292e3.jpg')
 ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}

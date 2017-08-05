import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  //To link recipe-list and recipe-detail. Recipe-item is receiving data from recipe-list.
  @Input() recipe: Recipe;

  // Event to inform recipe detail about which recipe was clicked.
  @Output() loadRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

// We're not passing the recipe here 'cause the parent component has a for
// loop which loops over individual recipe. And it is not the immediate parent which
//needs the recipe selected data, but recipes-component.

  onRecipeSelect(){
    this.loadRecipe.emit();    
  }
}

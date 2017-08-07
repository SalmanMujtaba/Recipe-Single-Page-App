import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatoes', 5),
  ]; 
  constructor() { }

  ngOnInit() {
  }
  ingredientAdded(Ingredient)
  { 
    this.ingredients.push(Ingredient);
  }

}

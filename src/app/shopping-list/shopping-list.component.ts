import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']

})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.insertIngredient
        .subscribe(
          (ingredient: Ingredient[])=>{
            this.ingredients = ingredient;
          }
        );
  }
  

}

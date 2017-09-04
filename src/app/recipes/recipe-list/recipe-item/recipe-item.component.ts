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
  @Input() index: Number;


  constructor() { }

  ngOnInit() {
  }
}

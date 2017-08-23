import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') nameAmount;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  
  sendData(){    
    this.shoppingListService.addIngredient({name: this.nameInput.nativeElement.value, 
                    amount: this.nameAmount.nativeElement.value});   
  } 


}

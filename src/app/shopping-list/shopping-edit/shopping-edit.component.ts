import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') nameAmount;
  @Output() loadData = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit() {
  }
  
  sendData(){
    this.loadData.emit({name: this.nameInput.nativeElement.value, 
                        amount: this.nameAmount.nativeElement.value
    });   
  }

}

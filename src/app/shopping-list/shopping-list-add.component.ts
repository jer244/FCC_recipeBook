import { Component, Input, OnChanges } from '@angular/core';

import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  isAdd = true;
  @Input() item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null) {
      this.isAdd = true;
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    if(!this.isAdd) {
      //edit
    } else {
      this.item = new Ingredient (ingredient.name, ingredient.amount);
      this.sls.addItem(this.item);
    }
  }

}

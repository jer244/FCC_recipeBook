import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

}

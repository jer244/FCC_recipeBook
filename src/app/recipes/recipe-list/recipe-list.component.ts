import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { Ingredient } from '../../shared/ingredient';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected: EventEmitter<Recipe> =  new EventEmitter();

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}

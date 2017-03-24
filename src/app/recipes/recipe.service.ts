import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import  'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

    private recipes: Recipe[] = [
      new Recipe("dummy", "blah", "http://vilascounty.uwex.edu/files/2013/12/Recipes-Title.png", [
        new Ingredient('dummyIngr1', 2),
        new Ingredient('dummyIngr2', 4)
      ]),
      new Recipe("dummy2", "blah, blah", "http://2.bp.blogspot.com/-UXaKfAnAWRY/TbZ7Jtz5g8I/AAAAAAAALbs/0Sz83Nr5oxQ/s1600/recipe+clipart.gif", [
        new Ingredient('dummyIngr3', 9),
        new Ingredient('dummyingr4', 38)
      ])
    ];

    getRecipe(id: number) {
      return this.recipes[id];
    }

    getRecipes() {
      return this.recipes;
    }

    deleteRecipe(id: number) {
      this.recipes.splice(id, 1);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
    }

    editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
      this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData() {
      const body = JSON.stringify(this.recipes);
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      return this.http.put('firebaseUrl/recipes.json', body, {headers: headers});
    }

    fetchData() {
      return this.http.get('firebaseUrl/recipes.json')
      .map((response: Response) => response.json())
        .subscribe(
          (data: Recipe[]) => {
            this.recipes = data;
            this.recipesChanged.emit(this.recipes);
          }
        )
    }

  constructor(private http: Http) { }

}

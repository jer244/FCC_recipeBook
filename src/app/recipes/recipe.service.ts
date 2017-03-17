import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

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

    getRecipes() {
      return this.recipes;
    }

  constructor() { }

}

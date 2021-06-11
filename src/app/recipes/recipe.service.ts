import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe(
      'dcd',
      'erfcfc',
      'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'weffvfv',
      'erfcfc',
      'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
      [new Ingredient('wefe', 5)]
    ),
    new Recipe(
      'dsdfvsedrfvercd',
      'erfcfc',
      'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
      [new Ingredient('wefe', 5)]
    )
  ];
  public recipeSelectedSource = new Subject<Recipe>();
  public recipeSelected$ = this.recipeSelectedSource.asObservable();

  constructor(private _shoppingListService: ShoppingListService) { }

  public setRecipe(recipe: Recipe) {
    this.recipeSelectedSource.next(recipe);
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }
}

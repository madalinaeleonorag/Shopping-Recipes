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
      'London Broil with Herb Butter',
      'Most people mistakenly think London broil started out as a cut of meat, when it is actually a type of preparation.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-london-broil-vertical-1546559244.jpg',
      [new Ingredient('London broil top-round steak Kosher salt', 1),
      new Ingredient('Freshly ground black pepper', 1),
      new Ingredient('Extra-virgin olive oil', 1),
      new Ingredient('Juice of 1/2 lemon', 1),
      new Ingredient('Packed brown sugar', 2),
      new Ingredient('Worcestershire sauce', 1),
      new Ingredient('Cloves garlic', 4)
      ]
    ),
    new Recipe(
      'Best-Ever Black Bean Burgers',
      'Finding alternatives to meat can be hard, but we think these burgers really nail it.',
      'https://www.simplyrecipes.com/thmb/O-rhPnz2V3hdqKFPij8NlwZIKqs=/2376x1584/filters:fill(auto,1)/Simply-Recipes-Quesadilla-LEAD-5-55da42a2a306497c85b1328385e44d85.jpg',
      [
        new Ingredient('Cans black beans', 2),
        new Ingredient('Package shiitake mushrooms', 1),
        new Ingredient('Package shiitake mushrooms', 1),
        new Ingredient('Extra-virgin olive oil', 1),
        new Ingredient('Kosher salt', 1),
        new Ingredient('Freshly ground black pepper', 1),
        new Ingredient('Old-fashioned oats', 1),
        new Ingredient('Avocado', 1),
        new Ingredient('Vegetable oil', 1),
        new Ingredient('Ground cumin', 1),
        new Ingredient('Chili powder', 1),
        new Ingredient('Cloves garlic', 2),
        new Ingredient('Smoked paprika', 2),
        new Ingredient('Loosely packed cilantro or parsley leaves', 1),
      ]
    ),
    new Recipe(
      'Lobster-Shrimp Cakes',
      'You can make smaller patties to serve as an appetizer or side, or form larger portions for a more substantial dinner.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-20210413-lobstershimpcakes-04-landscape-bc-1623113945.jpg',
      [new Ingredient('Mayonnaise', 1),
      new Ingredient('Juice and zest of 1 lemon', 1),
      new Ingredient('Clove garlic', 1),
      new Ingredient('Fine sea salt', 1),
      new Ingredient('Freshly ground black pepper', 1),
      new Ingredient('Habanero or hot pepper of your choice', 1),
      ]
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

  public getRecipe(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  public updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }

  public deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}

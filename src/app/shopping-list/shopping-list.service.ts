import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }

}

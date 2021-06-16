import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  
  public isRefreshIngredients = new Subject<boolean>();
  public isRefreshIngredients$ = this.isRefreshIngredients.asObservable();
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.isRefreshIngredients.next(true);
  }

  public getIngredients(): Ingredient[] {
    return this.uniqueIngredients(this.ingredients);
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.isRefreshIngredients.next(true);
  }

  private uniqueIngredients(ingredients: Ingredient[]): Ingredient[] {

    const uniqueIngredients: Ingredient[] = [];

    ingredients.forEach((x) => {
      if (uniqueIngredients.some((val) => val['name'] === x['name'])) {

        uniqueIngredients.forEach((k) => {
          if (k['name'] === x['name']) {
            k['amount'] += x['amount'];
          }
        });

      } else {
        const a: Ingredient = new Ingredient('', 0);
        a['name'] = x['name'];
        a['amount'] = x['amount'];
        uniqueIngredients.push(a);
      }

    });
    return uniqueIngredients;
  }
}

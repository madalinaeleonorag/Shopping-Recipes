import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public recipeSelectedSource = new Subject<Recipe>();
  public recipeSelected$ = this.recipeSelectedSource.asObservable();

  constructor() { }

  public setRecipe(recipe: Recipe) {
    this.recipeSelectedSource.next(recipe);
  }
}

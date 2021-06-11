import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipeSelected: Recipe;

  constructor(private _recipeService: RecipeService) { }

  ngOnInit(): void {

    this._recipeService.recipeSelected$.subscribe(recipe => {
      this.recipeSelected = recipe;
    });
  }

  public onAddToShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients);
  }

}

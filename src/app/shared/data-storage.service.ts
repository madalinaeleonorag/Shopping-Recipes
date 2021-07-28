import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {
    }

    public storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://htmlcsstemplates-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
            .subscribe(response => {
                //
            });
    }

    public fetchRecipes() {
        this.http.get<Recipe[]>('https://htmlcsstemplates-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                });
            }))
            .subscribe(recipes => {
                this.recipeService.setRecipes(recipes);
            });
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipeSelected: Recipe;
  id: number;

  constructor(private _recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      this.recipeSelected = this._recipeService.getRecipe(+params['id']);
      this.id = +params['id'];
    });
  }



  public onAddToShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.recipeSelected.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private _shoppingListService: ShoppingListService) {

    this._shoppingListService.isRefreshIngredients$.subscribe((isRefreshed: boolean) => {
      this.ingredients = this._shoppingListService.getIngredients();
    });

  }

  ngOnInit(): void {
    this.ingredients = this._shoppingListService.getIngredients();
  }

  public onEditItem(index: number) {
    this._shoppingListService.startedEditing.next(index);
  }

}

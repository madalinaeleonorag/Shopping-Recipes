import { ThrowStmt } from '@angular/compiler';
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

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this._shoppingListService.getIngredients();
  }

}

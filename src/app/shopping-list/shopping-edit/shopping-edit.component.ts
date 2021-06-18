import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  private subscription: Subscription;
  private editedItemIndex: number;
  public editMode = false;
  public editedItem;

  constructor(private _shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this._shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this._shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  public onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, +value.amount);
    this._shoppingListService.addIngredient(newIngredient);
    this.editMode = false;
    this.slForm.resetForm();
  }

  public onClear() {
    this.slForm.resetForm();
  }

  public onDelete() {
    this._shoppingListService.deleteIngredient(this.editedItemIndex);
    this.slForm.resetForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

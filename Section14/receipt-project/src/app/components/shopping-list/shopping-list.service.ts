import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();

  private _ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  get ingredients(): Ingredient[] {
    return this._ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) : void {
    this._ingredients.push(ingredient);
    this.ingredientChanged.next(this._ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this._ingredients.push(...ingredients);
    this.ingredientChanged.next(this._ingredients.slice());
  }

  constructor() { }

}

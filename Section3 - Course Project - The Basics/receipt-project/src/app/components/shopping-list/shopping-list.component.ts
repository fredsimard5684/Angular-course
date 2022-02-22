import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../models/ingredient";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private _ingredients : Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ];

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  addIngredient(ingredient : Ingredient) : void {
    this._ingredients.push(ingredient);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

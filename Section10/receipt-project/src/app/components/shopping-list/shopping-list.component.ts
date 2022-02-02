import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  private _ingredients : Ingredient[];

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this._ingredients = this.slService.ingredients;
    this.slService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this._ingredients = ingredients;
    });
  }
}

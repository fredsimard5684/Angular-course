import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../models/ingredient";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private _ingredients : Ingredient[];
  private igChangeSub: Subscription;

  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this._ingredients = this.slService.ingredients;
    this.igChangeSub = this.slService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
      this._ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}

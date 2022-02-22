import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../../models/recipe";
import {Ingredient} from "../../models/ingredient";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private readonly _recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a text',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 100),
      ]),
    new Recipe('Burger', 'This is simply a text',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 100),
      ])
  ];

  get recipes(): Recipe[] {
    return this._recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  constructor(private slService: ShoppingListService) {
  }
}

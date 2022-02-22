import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private _recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a text',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('A test recipe', 'This is simply a text',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  public get recipes() {
    return this._recipes;
  }

  public addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

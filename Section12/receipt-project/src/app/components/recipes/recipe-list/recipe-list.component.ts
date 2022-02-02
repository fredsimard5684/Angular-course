import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../models/recipe";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private _recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._recipes = this.recipeService.recipes;
  }

  public get recipes() {
    return this._recipes;
  }

  public addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "../components/recipes/recipes.component";
import {ShoppingListComponent} from "../components/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "../components/recipes/recipe-start/recipe-start.component";
import {RecipeDetailsComponent} from "../components/recipes/recipe-details/recipe-details.component";
import {RecipeEditComponent} from "../components/recipes/recipe-edit/recipe-edit.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailsComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

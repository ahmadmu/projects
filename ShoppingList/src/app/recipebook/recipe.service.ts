import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shopping-list.service';

// Use Injectable to be able to inject services in other services
@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  // emit new recipe everytime the list is recipes array is changed
  // Use Subject rather than EventEmitter, EventEmitter only with @Output
  // Subject is an Observable (and an Observer)
  recipesChanged = new Subject<Recipe[]>();
  desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo mollis purus sed vehicula. Morbi ipsum sapien, dictum eu erat nec, consectetur volutpat lorem. Mauris hendrerit massa et mi efficitur ullamcorper. Curabitur gravida congue lacus ut molestie. Sed ut magna vel sapien efficitur condimentum. Donec interdum, odio finibus commodo ornare, elit augue semper risus, a posuere enim sem eu turpis. Praesent sapien urna, tincidunt non maximus et, laoreet eget ante. Donec efficitur tempus quam, quis tincidunt ligula dictum et. Integer eu ante posuere, ultricies nibh et, porta lacus.';

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', this.desc, 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', 
    [ new Ingredient('meat', 1) ]),
    new Recipe('Test Recipe2', this.desc, 'https://eat24-files-live.s3.amazonaws.com/cuisines/v4/chinese.jpg?Signature=cJOrJVMdszLtnSJ6u6C1TRsza%2B0%3D&Expires=1499349433&AWSAccessKeyId=AKIAIEJ2GCCJRT63TBYA', 
    [ new Ingredient('meat', 1), new Ingredient('pizza', 19) ])
  ];

  // Inject shopping list service
  constructor(private sls: ShoppingListService) { }

  getRecipes() {
    // return a copy of the list not the list itself
    return this.recipes.slice();
  }

  getRecipe(i: number) {
    return this.recipes[i];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.sls.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    // splice(index, number) deletes, slice copies
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

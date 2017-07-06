import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  sub: Subscription;

  // Inject RecipeService, Router and the activated route
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.recipeService.recipesChanged
      .subscribe(
         (recipes: Recipe[]) => {
            this.recipes = recipes;
         }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  // unsubscribe from self-made (Subject) Observables to avoid memory leaks
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

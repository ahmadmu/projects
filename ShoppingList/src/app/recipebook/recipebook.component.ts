import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
    selector: 'app-recipebook',
    templateUrl: './recipebook.component.html',
    providers: []
})

export class RecipeBookComponent implements OnInit {
    // selectedRecipe: Recipe;

    constructor() {}
    // private recipeService: RecipeService

    ngOnInit() {
        // this.recipeService.recipeSelected
        //     .subscribe(
        //         (recipe: Recipe) => {
        //             this.selectedRecipe = recipe;
        //         }
        //     );
    }

}

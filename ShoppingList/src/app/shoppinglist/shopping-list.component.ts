import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private sub: Subscription;
  search = '';

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sls.getIngredients();
    this.sub = this.sls.ingredientsChanged.subscribe(
      (i: Ingredient[]) => {
      this.ingredients = i;
    });
  }

  // unsubscribe from self-made (Subject) Observables to avoid memory leaks
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEditItem(index: number) {
    this.sls.startedEditing.next(index);
  }
}

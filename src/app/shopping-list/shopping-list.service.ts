import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Soy Sauce', 5),
    new Ingredient('Fish', 3),
  ];

  getShoppingList() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(arrOfIngredients: Ingredient[]) {
    this.ingredients.push(...arrOfIngredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

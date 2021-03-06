import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipiesService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg',
      [
        new Ingredient('Veggies', 1),
        new Ingredient('Meat', 1),
        new Ingredient('More Meat', 1),
      ]
    ),
    new Recipe(
      'Test',
      'This is a test',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg',
      [
        new Ingredient('Different', 1),
        new Ingredient('From the', 1),
        new Ingredient('First', 1),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

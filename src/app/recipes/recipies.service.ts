import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipiesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'
    ),
    new Recipe(
      'Test',
      'This is a test',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  constructor() {}
}

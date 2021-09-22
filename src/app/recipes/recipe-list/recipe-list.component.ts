import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipiesService } from '../recipies.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a test',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg',
      [
        new Ingredient('food', 3),
        new Ingredient('food', 3),
        new Ingredient('food', 3),
      ]
    ),
    new Recipe(
      'Test',
      'This is a test',
      'https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_960_720.jpg',
      [
        new Ingredient('food', 3),
        new Ingredient('food', 3),
        new Ingredient('food', 3),
      ]
    ),
  ];

  constructor(private recipeService: RecipiesService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}

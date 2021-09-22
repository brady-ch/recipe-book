import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipiesService } from './recipies.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipiesService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;
  constructor(private recipesService: RecipiesService) {}

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}

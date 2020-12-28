import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  // recipe = [];
  selectedRecipe: Recipe;

  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.RecipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;

        }
      );
  }

}

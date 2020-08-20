import { Component } from '@angular/core';
import { Recipe } from '../shared/models/recipe';
import { IngredientQuantified } from '../shared/models/ingredient-quantified';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recipe: Recipe;
  ingredientQuantifiedList: IngredientQuantified[];

  constructor() {
    this.recipe = new Recipe();
    this.recipe.ingredientQuantifiedList = [new IngredientQuantified()];
    console.log(this.recipe);
  }
  addIngredient() {
    this.ingredientQuantifiedList.push(new IngredientQuantified());
    console.log(this.ingredientQuantifiedList);
  }

}

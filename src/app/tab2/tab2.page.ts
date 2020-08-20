import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/models/recipe';
import { IngredientQuantified } from '../shared/models/ingredient-quantified';
import { Button } from 'protractor';
import { Ingredient } from '../shared/models/ingredient';
import { IngredientListService } from '../shared/services/ingredient-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  recipe: Recipe;
  ingredientQuantifiedList: IngredientQuantified[];
  ingredientsFullList: Ingredient[];
  subscription$: Subscription;

  constructor(private ingredientListService: IngredientListService) {
    this.recipe = new Recipe();
    this.recipe.ingredientQuantifiedList = [new IngredientQuantified()];
    console.log(this.recipe);
  }
  addIngredient() {
    this.recipe.ingredientQuantifiedList.push(new IngredientQuantified());
    console.log(this.ingredientQuantifiedList);
  }

 ngOnInit() {
    console.log('INIT' + this.constructor.name + 'BABY!');
    this.subscription$ = this.ingredientListService.getIngredientsList().subscribe(
      (value: Ingredient[]) => {
        // Next
        console.log('CallObservableComponent Next', value);
        this.ingredientsFullList = value;
        console.log(value);
        console.log(this.ingredientsFullList);
      }, (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }, () => {
        // Complete
        console.log('CallObservableComponent Complete');
      }
    );
  }

  HandleAddRecipeClick() {
    console.log(this.recipe);
  }

}

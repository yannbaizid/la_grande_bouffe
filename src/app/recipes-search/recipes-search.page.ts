import { Component, OnInit } from '@angular/core';
import { Recette } from '../shared/models/recette';
import { Recipe } from '../shared/models/recipe';
import { RecipeListService } from 'src/app/shared/services/recipe-list.service';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import {RecipePresentationModalPage} from 'src/app/recipes/recipe-presentation-modal/recipe-presentation-modal.page';

@Component({
  selector: 'app-recipes-search',
  templateUrl: 'recipes-search.page.html',
  styleUrls: ['recipes-search.page.scss']
})
export class RecipesSearchPage implements OnInit {
  recettes: Recette[];
  recettesDisplayed: Recette[];
  recipeList: Recipe[];
  valueSearched = '';
  subscription$: Subscription;

  constructor(private recipeListService: RecipeListService,
              public recipeModalController: ModalController) {
    this.recettes = [
      new Recette('Paté de porc en croûte de banane', 3, ['boeuf', 'banane']),
      new Recette('Semoule de moquette Ikea', 4, ['moquette', 'miettes de pain', 'confiture de courgette']),
      new Recette('pates-knacki', 2, ['250 grammes de pâtes', '10 knackis']),
      new Recette('pates au beurre', 1, ['250 grammes de pâtes', '250g de beurre']),
      new Recette('pates bolognaise', 2, ['250 grammes de pâtes', '3 tomates', '1 oignon', '100g de boeuf haché', '2 gousse d\'ail'])];
  }

  ngOnInit(): void {
    console.log('INIT' + this.constructor.name + 'BABY!');
    this.subscription$ = this.recipeListService.getRecipesList().subscribe(
      (value: Recipe[]) => {
        // Next
        console.log('CallObservableComponent Next', value);
        this.recipeList = value;
        console.log(value);
        console.log(this.recipeList);
      }, (error) => {
        // Error
        console.error('CallObservableComponent error', error);
      }, () => {
        // Complete
        console.log('CallObservableComponent Complete');
      }
    );
  }


  getRecettesDisplayed(valueSearched: string): void {
    if (valueSearched.length > 2) {
      this.recettesDisplayed = this.recettes.filter((recette) => {
        return (recette.intitule.toLowerCase().indexOf(valueSearched.toLowerCase()) > -1);
      });

    }
    else {
      this.recettesDisplayed = [];
    }
  }

  async createRecipeModal(recipe: Recette) {
    console.log('create modal');
    const modal = await this.recipeModalController.create({
      component: RecipePresentationModalPage,
      componentProps:  {recipe}
    });
    return await modal.present();
  }

}

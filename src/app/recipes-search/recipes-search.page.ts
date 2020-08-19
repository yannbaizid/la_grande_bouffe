import { Component, OnInit } from '@angular/core';
import { Recette } from '../shared/models/recette';
import { Recipe } from '../shared/models/recipe';

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

  constructor() {
    this.recettes = [
      new Recette('Paté de porc en croûte de banane', 3, ['boeuf', 'banane']),
      new Recette('Semoule de moquette Ikea', 4, ['moquette', 'miettes de pain', 'confiture de courgette']),
      new Recette('pates-knacki', 2, ['250 grammes de pâtes', '10 knackis']),
      new Recette('pates au beurre', 1, ['250 grammes de pâtes', '250g de beurre']),
      new Recette('pates bolognaise', 2, ['250 grammes de pâtes', '3 tomates', '1 oignon', '100g de boeuf haché', '2 gousse d\'ail'])];
  }

  ngOnInit(): void {
    console.log('INIT BABY!');
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

}

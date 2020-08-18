import { Component } from '@angular/core';
import { Recette } from '../shared/models/recette';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recettes: Recette[];
  recettesDisplayed: Recette[];

  constructor() {
    this.recettes = [
      new Recette('Paté de porc en croûte de banane', 3, ['boeuf', 'banane']),
      new Recette('Semoule de moquette Ikea', 4, ['moquette', 'miettes de pain', 'confiture de courgette']),
      new Recette('pates-knacki', 2, ['250 grammes de pâtes', '10 knackis']),
      new Recette('pates au beurre', 1, ['250 grammes de pâtes', '250g de beurre']),
      new Recette('pates bolognaise', 2, ['250 grammes de pâtes', '3 tomates', '1 oignon', '100g de boeuf haché', '2 gousse d\'ail'])];
  }

  getRecettesDisplayed(event: any): void {
    const valueSearched: string = event.target.value;
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

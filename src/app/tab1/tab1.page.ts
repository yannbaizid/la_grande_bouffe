import { Component } from '@angular/core';
import { Recette } from '../shared/models/recette';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  recettes: Recette[];

  constructor() {
    this.recettes.push(new Recette('Paté de porc en croûte de banane', 3, [ 'boeuf', 'banane' ]));
    this.recettes.push(new Recette('Semoule de moquette Ikea', 4, [ 'moquette', 'miettes de pain' , 'confiture de courgette' ]));
    this.recettes.push(new Recette('pates-knacki', 1, [ '250 grammes de pâtes', '10 knackis']));

  }

}

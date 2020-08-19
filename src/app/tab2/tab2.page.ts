import { Component } from '@angular/core';
import { Recipe } from '../shared/models/recipe';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  recipe: Recipe;

  constructor() {}

}

import { Component, OnInit, Input } from '@angular/core';
import { Recette } from 'src/app/shared/models/recette';

@Component({
  selector: 'app-recipe-presentation-modal',
  templateUrl: './recipe-presentation-modal.page.html',
  styleUrls: ['./recipe-presentation-modal.page.scss'],
})
export class RecipePresentationModalPage implements OnInit {
  @Input() recipe: Recette;
  constructor() { }

  ngOnInit() {
  }

}

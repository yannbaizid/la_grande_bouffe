import { Component, OnInit, Input } from '@angular/core';
import { Recette } from 'src/app/shared/models/recette';
import { Recipe } from 'src/app/shared/models/recipe';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-recipe-presentation-modal',
  templateUrl: './recipe-presentation-modal.page.html',
  styleUrls: ['./recipe-presentation-modal.page.scss'],
})
export class RecipePresentationModalPage implements OnInit {
  @Input() recipe: Recipe;
  constructor(public viewCtrl: ModalController) { }

  ngOnInit() {
  }

  dismissModal() {
    this.viewCtrl.dismiss();
    }
}

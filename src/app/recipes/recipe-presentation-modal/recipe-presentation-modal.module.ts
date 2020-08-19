import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipePresentationModalPageRoutingModule } from './recipe-presentation-modal-routing.module';

import { RecipePresentationModalPage } from './recipe-presentation-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePresentationModalPageRoutingModule
  ],
  declarations: [RecipePresentationModalPage]
})
export class RecipePresentationModalPageModule {}

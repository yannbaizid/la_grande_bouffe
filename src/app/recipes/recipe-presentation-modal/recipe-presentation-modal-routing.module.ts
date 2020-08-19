import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipePresentationModalPage } from './recipe-presentation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RecipePresentationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipePresentationModalPageRoutingModule {}

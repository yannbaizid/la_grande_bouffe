import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesSearchPage } from './recipes-search.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesSearchPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesSearchPageRoutingModule {}

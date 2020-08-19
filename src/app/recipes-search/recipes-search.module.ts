import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesSearchPage } from './recipes-search.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RecipesSearchPageRoutingModule } from './recipes-search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
   RecipesSearchPageRoutingModule,
  ],
  declarations: [RecipesSearchPage]
})
export class Tab1PageModule {}

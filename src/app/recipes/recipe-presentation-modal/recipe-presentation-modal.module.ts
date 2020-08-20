import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallFriendModule} from 'src/app/shared/components/call-friend/call-friend.module';
import { IonicModule } from '@ionic/angular';

import { RecipePresentationModalPageRoutingModule } from './recipe-presentation-modal-routing.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { RecipePresentationModalPage } from './recipe-presentation-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipePresentationModalPageRoutingModule,
    CallFriendModule
  ],
  exports: [],
  providers: [CallNumber],
  declarations: [RecipePresentationModalPage]
})
export class RecipePresentationModalPageModule {}

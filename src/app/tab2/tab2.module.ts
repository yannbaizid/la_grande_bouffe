import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import {CallFriendModule } from 'src/app/shared/components/call-friend/call-friend.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    CallFriendModule
  ],
  providers: [CallNumber],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

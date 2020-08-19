import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {CallFriendComponent} from './call-friend.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [CallFriendComponent],
  exports: [CallFriendComponent]
})
export class CallFriendModule { }

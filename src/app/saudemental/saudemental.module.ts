import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudementalPageRoutingModule } from './saudemental-routing.module';

import { SaudementalPage } from './saudemental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudementalPageRoutingModule
  ],
  declarations: [SaudementalPage]
})
export class SaudementalPageModule {}

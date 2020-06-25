import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudementalPage } from './saudemental.page';

const routes: Routes = [
  {
    path: '',
    component: SaudementalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudementalPageRoutingModule {}

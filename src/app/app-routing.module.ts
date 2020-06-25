import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'saudemental',
    pathMatch: 'full'
  },
  {
    path: 'saudemental',
    loadChildren: () => import('./saudemental/saudemental.module').then(m => m.SaudementalPageModule)
  },
  {
    path: 'meusdados',
    loadChildren: () => import('./meusdados/meusdados.module').then(m => m.MeusdadosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

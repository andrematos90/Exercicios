import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciadorEventosComponent } from './components/gerenciador-eventos/gerenciador-eventos.component';

const routes: Routes = [
  {path: 'solucao', component: GerenciadorEventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

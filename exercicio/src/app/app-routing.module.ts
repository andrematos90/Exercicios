import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaItensComponent } from './components/lista-itens/lista-itens.component';

const routes: Routes = [

  {path: 'solucao',component: ListaItensComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

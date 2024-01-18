import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})
export class ListaItensComponent {

  candidatos = [
    {nome: "André", status:true},
    {nome: "João", status:false},
    {nome: "Pedro", status:false},
    {nome: "Vitor", status:true}
  ]

  changeStatus(candidato:any):void{
    candidato.status = !candidato.status
  }

}

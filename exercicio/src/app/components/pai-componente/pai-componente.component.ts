import { Component } from '@angular/core';

@Component({
  selector: 'app-pai-componente',
  templateUrl: './pai-componente.component.html',
  styleUrls: ['./pai-componente.component.css']
})
export class PaiComponenteComponent {

  mostra:boolean = false;
  mensagem!:string;

  mostraFilho(){
    this.mostra = !this.mostra
  }

  recebeMensagem(mensagemDigitada:string){
    this.mensagem = mensagemDigitada

  }

}

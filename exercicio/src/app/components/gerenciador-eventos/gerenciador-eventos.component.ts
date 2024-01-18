import { Component } from '@angular/core';

@Component({
  selector: 'app-gerenciador-eventos',
  templateUrl: './gerenciador-eventos.component.html',
  styleUrls: ['./gerenciador-eventos.component.css']
})
export class GerenciadorEventosComponent {
  buttonStaus:boolean = false;

  buttonPressed(){
    this.buttonStaus = !this.buttonStaus
    alert('Botão clicado!')
  }
}

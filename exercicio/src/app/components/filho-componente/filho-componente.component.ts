import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filho-componente',
  templateUrl: './filho-componente.component.html',
  styleUrls: ['./filho-componente.component.css']
})
export class FilhoComponenteComponent {

  @Output() enviaEvento: EventEmitter<any> = new EventEmitter()

  mensagemDigitada:string = ''


  enviarMensagem(){
    this.mensagemDigitada = this.mensagemDigitada
    this.enviaEvento.emit(this.mensagemDigitada)
  }

}

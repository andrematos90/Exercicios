import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio';

  animais = [
    {nome: "Simba", raca: "Rough-Collie", showRaca:false},
    {nome:"Milu", raca: "Vira-Lata", showRaca:false},
    {nome:"Luna", raca: "Pastor", showRaca:false},
    {nome:"Pretinha", raca: "Vira-Lata", showRaca:false},
    {nome:"Sky", raca: "Podle", showRaca:false},
    {nome:"Pitú", raca: "Podle", showRaca:false},
    {nome:"Xuxa", raca: "Podle", showRaca:false}
  ]




  showDetail(animal:any):void{
    animal.showRaca = !animal.showRaca
  }
}

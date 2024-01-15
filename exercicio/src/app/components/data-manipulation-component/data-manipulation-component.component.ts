import { Component } from '@angular/core';

@Component({
  selector: 'app-data-manipulation-component',
  templateUrl: './data-manipulation-component.component.html',
  styleUrls: ['./data-manipulation-component.component.css']
})
export class DataManipulationComponentComponent {

  cars = [
    {
      brand: "Renault",
      year: 2001,
      color: "silver",
      model: "Twingo",
      details: "O Renault Twingo é um modelo citadino de porte mini da Renault. Surgido em 1993, este miniautomóvel veio revolucionar as cidades europeias.",
      showDetails: false
    },

    {
      brand: "Volkswagen",
      year: 1985,
      color: "white",
      model: "Beatlle",
      details: "A história do fusca começa com o Volkswagen Typ 1 foi idealizado por Ferdinand Porsche, que queria criar um carro que fosse acessível.",
      showDetails: false
    },

    {
      brand: "Volkswagen",
      year: 2016,
      color: "white",
      model: "Saveiro",
      details: "Saveiro é um utilitário leve, que faz parte da linha Gol, fabricado pela Volkswagen.",
      showDetails: false
    },

    {
      brand: "Honda",
      year: 2008,
      color: "gray",
      model: "New Civic",
      details: "O Honda Civic é um automóvel produzido pela Honda desde 1973. Atualmente encontra-se em sua décima primeira geração.",
      showDetails: false
    },


    {
      brand: "Chevrolete",
      year: 2010,
      color: "silver",
      model: "Malibu",
      details:
        "O Malibu é um modelo de porte médio (nos EUA) da Chevrolet. O modelo surgiu em 1964 como versão de luxo do Chevelle.",
      showDetails: false
    }
  ]




  toggleDetails(car: any): void {
    car.showDetails = !car.showDetails;
  }

  deleteCar(car: any): void {
    const index = this.cars.indexOf(car);
    if (index !== -1) {
      this.cars.splice(index, 1);
    }
  }

  /*A função deleteCar recebe o carro como parâmetro e usa indexOf para encontrar a posição do carro no array. Se o carro for encontrado, splice é usado para remover 1 elemento a partir dessa posição.

Dessa forma, quando você clicar no botão de delete ao lado de um item, o respectivo item será removido do array e a lista será atualizada automaticamente na tela.*/

}



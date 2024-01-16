import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho-component',
  templateUrl: './filho-component.component.html',
  styleUrls: ['./filho-component.component.css']
})
export class FilhoComponentComponent {

  @Input() variavel!:string;

}

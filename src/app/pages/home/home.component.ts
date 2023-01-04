import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  numero1!:number;
  numero2!:number;
  operacion!:string;
  resultado0:string = "(No eligió operación)";
}

import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'body-component',
  templateUrl: 'body.component.html'
})
export class BodyComponent {
  mostrar:boolean=true;
  texto:string="El verano no es para chicos como yo.";
  autor:string="Aristoteles Quintana";
  //prueba de ngfor
  personajes:string[]=["Aristoteles", "Dante", "Patas"];
}
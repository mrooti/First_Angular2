import { Component } from '@angular/core';

@Component({
  moduleId: module.id,//para que tome el archivo templateUrl 
  selector: 'my-app',
  templateUrl:'app.component.html'
})
export class AppComponent  { name = 'Angular'; nombre='Jessy Malaa'; }

import { Component, OnInit } from '@angular/core';
import {HeroesService,heroes} from '../../servicios/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:heroes[];
  constructor(private _heroesService:HeroesService,
              private router:Router
              ) {

   }

  ngOnInit() {
    //cuando la página ya esta renderizada o cargada por completo
    this.heroes=this._heroesService.getHeroes();
    
  }
  /*
    Para hacer una redirección por función 
    se debe creare una función en el componente 
    debe importarse el router con 
    *import {Router} from '@angular/router';

  */
  verHeroe(indx:number){
    this.router.navigate(['/heroe',indx]);
  }
}



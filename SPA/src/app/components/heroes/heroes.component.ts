import { Component, OnInit } from '@angular/core';
import {HeroesService,heroes} from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:heroes[];
  constructor(private _heroesService:HeroesService) {

   }

  ngOnInit() {
    //cuando la página ya esta renderizada o cargada por completo
    this.heroes=this._heroesService.getHeroes();
    
  }

}



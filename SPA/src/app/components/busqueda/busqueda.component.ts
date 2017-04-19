import { Component, OnInit } from '@angular/core';
import {HeroesService,heroes} from '../../servicios/heroes.service';
import {ActivatedRoute} from'@angular/router';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  heroes:heroes[];
  constructor(private _servicio:HeroesService,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params=>{
      this.heroes=this._servicio.buscarHeroe(params.text);
    });
    //this.heroes=this._servicio.getHeroe("o");
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';//para obtener los atributos de las rutas
import {HeroesService} from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe:any={};
  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService
  ) {
    this.activatedRoute.params.subscribe(params=>{
      //console.log(params);
      this.heroe=this._heroeService.getHeroe(params.id);
      //console.log(this.heroe);
    });
   }

  ngOnInit() {
  }

}

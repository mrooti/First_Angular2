import { Component, OnInit } from '@angular/core';
import {HeroesService}  from '../../../servicios/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesservice:HeroesService,private router:Router) { }

  ngOnInit() {
  }
  buscarHeroe(texto:string){
    //this._heroesservice.buscarHeroe(texto);
    this.router.navigate(['/busqueda',texto]);
  }
}

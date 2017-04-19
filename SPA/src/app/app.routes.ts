import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {ErrorComponent} from './components/error/error.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {BusquedaComponent} from './components/busqueda/busqueda.component';



const APP_ROUTES: Routes = [
    { path: 'home',     component: HomeComponent },
    { path: 'heroes',   component: HeroesComponent},
    { path: 'about',    component: AboutComponent},
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'busqueda/:text', component: BusquedaComponent},
    { path: '**', pathMatch:'full', component: ErrorComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
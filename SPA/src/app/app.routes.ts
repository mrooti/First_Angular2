import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {ErrorComponent} from './components/error/error.component';



const APP_ROUTES: Routes = [
    { path: 'home',     component: HomeComponent },
    { path: 'heroes',   component: HeroesComponent},
    { path: 'about',    component:AboutComponent},
    { path: '**', pathMatch:'full', component: ErrorComponent }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);
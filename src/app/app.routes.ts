import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import {NavComponent} from "./nav/nav.component";
export const routes: Routes = [
  {
    path: 'index',
    component: NavComponent
  },{
    path: '',
    redirectTo: 'index',
    pathMatch : 'full'
  }
];
import { ROUTER_PROVIDERS ,Routes } from '@angular/router';
import { BusesComponent } from './buses/buses.component';

export const routes  =[
  { path: 'home', component: BusesComponent } ,
  { path : 'busdetail' , component : BusesComponent}
];


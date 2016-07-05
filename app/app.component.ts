import { Component, OnInit,ViewChild , OnDestroy ,OnChanges} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes , ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from'@angular/router';
import { BusService } from './buses/bus.service';
import { BusesComponent} from './buses/buses.component';
import { BusListComponent} from './buses/bus-list.component';
import { LoggerService } from './shared/logger.service';
import { SpinnerService } from './shared/spinner.service';
import { HeaderComponent} from './common/header.component';
import { SearchComponent} from './common/search.component';

@Component({
   
    selector: 'bus-route',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers:[BusService,LoggerService,HTTP_PROVIDERS,SpinnerService,ROUTER_PROVIDERS],
    directives:[ROUTER_DIRECTIVES,HeaderComponent,SearchComponent]   
})

@Routes([
    { path: 'from', component: BusesComponent},
    { path: 'to', component:  BusListComponent}
])
export class AppComponent implements OnInit {  
    constructor( ) {  
     }
    ngOnInit() { 
    }
}
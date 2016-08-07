import { Component, OnInit,ViewChild , OnDestroy ,OnChanges} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes , ROUTER_DIRECTIVES , ROUTER_PROVIDERS } from '@angular/router';
import { BusService } from './buses/bus.service';
import { BusesComponent} from './buses/buses.component';
import { BusListComponent} from './buses/bus-list.component';
import { LoggerService } from './shared/logger.service';
import { SpinnerService } from './shared/spinner.service';
import { HeaderComponent} from './common/header.component';
import { SearchComponent} from './common/search.component';
import { AboutComponent} from './common/about.component';
import { ContactComponent} from './common/contact.component';
import { LoginComponent} from './common/login.component';
import { AdminFormComponent} from './common/adminform.component';
@Component({
   
    selector: 'bus-route',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers:[BusService,LoggerService,HTTP_PROVIDERS,ROUTER_PROVIDERS],
    directives:[ROUTER_DIRECTIVES,HeaderComponent,SearchComponent]   
})

@Routes([
    { path: '', component: BusesComponent},
    { path: 'about', component:  AboutComponent},
    { path: 'contact', component:  ContactComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'adminform', component:  AdminFormComponent}
])
export class AppComponent implements OnInit {  
    public spinner:boolean;
    constructor(private _spinner:SpinnerService ) {  
        this.spinner=_spinner.spinner;
                  _spinner.getspinner.subscribe((value: boolean) => this.spinner=value)
     }
    ngOnInit() { 
        
    }
}
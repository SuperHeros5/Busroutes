import { Component, OnInit,ViewChild} from '@angular/core';
import { BusService } from './buses/bus.service';
import { BusListComponent } from './buses/bus-list.component';
@Component({
   
    selector: 'bus-route',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers:[BusService],
    directives:[BusListComponent],    
})
export class AppComponent implements OnInit {
    public buses;
    public sourcevalue="ganesh";
    @ViewChild(BusListComponent) filter;
    constructor(private _busservices : BusService) {
        this.buses = _busservices.getBuses();
     }
     public selectedroute=function(selected){
         alert(selected);
        // this.filter.details(selected);
        
     }

    ngOnInit() { }

}
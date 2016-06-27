import { Component, OnInit } from '@angular/core';
import { BusService } from './buses/bus.service';
@Component({
   
    selector: 'bus-route',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    providers:[BusService]
    
})
export class AppComponent implements OnInit {
    public buses;
    constructor(private _busservices : BusService) {
        this.buses = _busservices.getBuses();
     }

    ngOnInit() { }

}
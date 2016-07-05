import { Component, OnInit,ViewChild , OnDestroy ,OnChanges} from '@angular/core';
import { BusService } from './bus.service';
import { BusListComponent } from './bus-list.component';
import { Observable} from 'rxjs/Rx';


@Component({
    
    selector : 'buseslist',
    templateUrl: 'app/buses/buses.component.html',
     styleUrls:['app/buses/buses.component.css'],
    directives:[BusListComponent]
})
export class BusesComponent implements OnInit,OnDestroy {
   public buses;
    public sourcevalue;
    public busessources;
    @ViewChild(BusListComponent) filter;
    constructor(private _busservices : BusService ) {
       
     }
     public selectedroute=function(selected){
         alert(selected);
        // this.filter.details(selected);
        
     }

    ngOnInit() { 
     this._busservices.getBuses()
     .subscribe(data => {this.buses=data;console.log(data);},error => console.log(error),()=>console.log("completed"));
      this._busservices.getplaces()
       .subscribe(data => {this.busessources=data;console.log(data);},error => console.log(error),()=>console.log("completed places"));
  //alert(this.buses);
//     this.buses=[{ "source":"Gachibowli" },{ "source":"Kondapur" },{ "source":"Indiranagar" },{ "source":"Hitechcity" }];
        // alert(this.buses);
         // this._busservices.getBuses();
    }
    
    ngOnDestroy(){
        
    }
    public getBusDetails(){
      let places=document.getElementById("places");
     let selectedvalue = places.options[places.selectedIndex].innerHTML;
     this._busservices.getSelectedSource(selectedvalue)
     .subscribe(data => {this.buses=data;console.log(data);},error => console.log(error),()=>console.log("completed"));
       
        }
}
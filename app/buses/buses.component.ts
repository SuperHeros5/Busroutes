import { Component, OnInit,ViewChild , OnDestroy ,OnChanges} from '@angular/core';
import { BusService } from './bus.service';
import { BusListComponent } from './bus-list.component';
import { Observable} from 'rxjs/Rx';
import { sourceFilter } from '../shared/sourcefilter.pipe';
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";


@Component({
    
    selector : 'buseslist',
    templateUrl: 'app/buses/buses.component.html',
     styleUrls:['app/buses/buses.component.css'],
    directives:[BusListComponent,DROPDOWN_DIRECTIVES],
    pipes:[sourceFilter]
})
export class BusesComponent implements OnInit,OnDestroy,OnChanges {
   public buses;
    public sourcevalue;
    public busessources;
    public srcadi:boolean = true;
    public srcloc:boolean = true;
    public destadi:boolean = true;
    public destloc:boolean = true;
    @ViewChild(BusListComponent) filter;
    constructor(private _busservices : BusService ) {
       
     }
     public selectedroute=function(selected){
        
        // this.sourcevalue=selected;
        // this.filter.details(selected);
        
     }

    ngOnInit() { 
    /* this._busservices.getBuses()
     .subscribe(data => {this.buses=data;console.log(data);},error => console.log(error),()=>console.log("completed"));*/
      this._busservices.getplaces()
       .subscribe(data => {this.busessources=data;console.log(data);},error => console.log(error),()=>console.log("completed places"));
  //alert(this.buses);
//     this.buses=[{ "source":"Gachibowli" },{ "source":"Kondapur" },{ "source":"Indiranagar" },{ "source":"Hitechcity" }];
        // alert(this.buses);
         // this._busservices.getBuses();
    }
    ngOnChanges(){
        
    }
    
    ngOnDestroy(){
        
    }
    public getSrcBusDetails(){
     
      let places=document.getElementById("srcplace");
    let selectedvalue = places.options[places.selectedIndex].innerHTML;
    if(selectedvalue === "Adibatla"){
        this.destloc=true;
        this.destadi=false;
        this.srcloc=false;
        document.getElementById("destplace").value="Select to location";
    }else{
         this.destloc=false;
        this.destadi=true;
        this.srcloc=false;
        document.getElementById("destplace").value="Adibatla";
        this._busservices.getToAdibatla(selectedvalue)
     .subscribe(data => {this.buses=data;console.log(data);},error => console.log(error),()=>console.log("completed"));
       this.sourcevalue=selectedvalue;
    }
     document.getElementById("destplace").focus();
        }
        
     public getDstBusDetails(){
     
      let places=document.getElementById("destplace");
    let selectedvalue = places.options[places.selectedIndex].innerHTML;
   
     this._busservices.getFromAdibatla(selectedvalue)
     .subscribe(data => {this.buses=data;console.log(data);},error => console.log(error),()=>console.log("completed"));
       this.sourcevalue=selectedvalue;
        }
}
import { Component, OnInit,Input,Output , EventEmitter , AfterViewInit ,AfterContentChecked} from '@angular/core';
import { ReversePipe } from '../shared/reverse.pipe';
import { LoggerService } from '../shared/logger.service';

@Component({
  
    selector: 'busroutes-list',
    templateUrl: 'app/buses/bus-list.component.html',
    styleUrls:['app/buses/bus-list.component.css'],
    pipes : [ReversePipe]
})
export class BusListComponent implements OnInit,AfterViewInit ,AfterContentChecked{
    
    @Input() buseslist;
    @Input() sourceselected;
     @Input() public srcadi:boolean = true;
    @Input() public srcloc:boolean = true;
    @Input() public destadi:boolean = true;
    @Input() public destloc:boolean = true;
    @Output() selectroute= new EventEmitter();
     public currlocation;
     public landmarklocurl : string = "";
     public landmarkloc : string = "";
    
    constructor(private _log:LoggerService) { }
    
    ngOnInit() {}
    ngAfterViewInit(){ }
    ngAfterContentChecked(){ this.getlocation();}
 public details=function(source){
         alert(source);
         this._log.log(source);
        this.selectroute.emit(source);
     }
     public getlocation(){
          if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
     }
     public showPosition= (position) =>{
         this.currlocation=position.coords.latitude+","+position.coords.longitude;
    
    }
     public getmapdirections= ( landmarkloc ) => {
         this.landmarkloc=landmarkloc;
         this.landmarklocurl="https://www.google.com/maps/embed/v1/directions?key=AIzaSyBWgQr8HZk6JA-qbGHGScwyD8XDXOsE4J4&origin="+this.currlocation+"&destination="+this.sourceselected+landmarkloc+"&avoid=tolls|highways";
       console.log(this.landmarklocurl); 
       console.log(this.sourceselected);
       console.log(landmarkloc);
     }
}
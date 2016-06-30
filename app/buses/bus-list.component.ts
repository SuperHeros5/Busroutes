import { Component, OnInit,Input,Output , EventEmitter} from '@angular/core';
import { ReversePipe } from '../shared/reverse.pipe';

@Component({
  
    selector: 'busroutes-list',
    templateUrl: 'app/buses/bus-list.component.html',
    styleUrls:['app/buses/bus-list.component.css'],
    pipes : [ReversePipe]
})
export class BusListComponent implements OnInit {
    @Input() buseslist;
    @Output() selectroute= new EventEmitter();
    constructor() { }

    ngOnInit() { }
 public details=function(source){
         alert(source);
        this.selectroute.emit(source);
     }
}
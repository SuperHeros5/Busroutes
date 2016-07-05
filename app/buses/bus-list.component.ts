import { Component, OnInit,Input,Output , EventEmitter} from '@angular/core';
import { ReversePipe } from '../shared/reverse.pipe';
import { LoggerService } from '../shared/logger.service';

@Component({
  
    selector: 'busroutes-list',
    templateUrl: 'app/buses/bus-list.component.html',
    styleUrls:['app/buses/bus-list.component.css'],
    pipes : [ReversePipe]
})
export class BusListComponent implements OnInit {
    @Input() buseslist;
    @Output() selectroute= new EventEmitter();
    constructor(private _log:LoggerService) { }

    ngOnInit() { }
 public details=function(source){
         alert(source);
         this._log.log(source);
        this.selectroute.emit(source);
     }
}
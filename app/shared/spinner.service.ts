import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SpinnerService {
 public spinner:boolean = false;
 //@Output() dataChangeObserver: EventEmitter<any> =new EventEmitter();
  public getspinner = new BehaviorSubject(null);
    constructor() { }
    show(){
      this.spinner=false;  
   this.getspinner.next(this.spinner);
    }
    hide(){
        this.spinner=true; 
        this.getspinner.next(this.spinner);
        
    }
   

}
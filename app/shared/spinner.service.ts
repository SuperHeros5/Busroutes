import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {
public spinner:boolean;
    constructor() { }
    show(){
      this.spinner=true;  
    }
    hide(){
        this.spinner=false;
    }

}
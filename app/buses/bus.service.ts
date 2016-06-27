import { Injectable } from '@angular/core';

@Injectable()
export class BusService {

    constructor() { }
    
    public getBuses(){
       let buses=[{ "source":"Gachibowli" },{ "source":"Kondapur" },{ "source":"Indiranagar" },{ "source":"Hitechcity" }]
        return buses;
    }

}
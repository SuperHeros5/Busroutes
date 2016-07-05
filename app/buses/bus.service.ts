import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { CONFIG } from '../shared/config';
import { SpinnerService } from '../shared/spinner.service';
import 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';
let allbusesurl = CONFIG.baseurls.allbuses;
let getplacesurl=CONFIG.baseurls.getplaces;
let getselectedplace=CONFIG.baseurls.getselectedplace;
@Injectable()
export class BusService {
    
    constructor(private _http:Http,private _spinner:SpinnerService) { }
    
    public getBuses() : Observable<any>{
       let buses=[{ "source":"Gachibowli" },{ "source":"Kondapur" },{ "source":"Indiranagar" },{ "source":"Hitechcity" }];
       this._spinner.show();
       console.log(allbusesurl);
      return this._http.get(allbusesurl)
          .map((res: Response) => res.json())
          .finally(()=>this._spinner.hide());
          //return buses;
    }
    
    public getplaces() : Observable<any>{
      
       this._spinner.show();
       
      return this._http.get(getplacesurl)
          .map((res: Response) => res.json())
          .finally(()=>this._spinner.hide());
          //return buses;
    }
  
    public getSelectedSource(selectedplace) : Observable<any>{
      console.log(getselectedplace+"?place="+selectedplace);
       this._spinner.show();
      return this._http.get(getselectedplace+"?place="+selectedplace)
          .map((res: Response) => res.json())
          .finally(()=>this._spinner.hide());
          //return buses;
    }

}
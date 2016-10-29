import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { CONFIG } from '../shared/config';
import { SpinnerService } from '../shared/spinner.service';
import 'rxjs/Rx';
import { Observable} from 'rxjs/Observable';
let allbusesurl = CONFIG.baseurls.allbuses;
let getplacesurl=CONFIG.baseurls.getplaces;
let gettoadibatlaplaces=CONFIG.baseurls.gettoadibatlaplaces;
let getfromadibatlaplaces=CONFIG.baseurls.getfromadibatlaplaces;
let getweather=CONFIG.baseurls.getweather;
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
  
    public getToAdibatla(selectedplace) : Observable<any>{
      console.log(gettoadibatlaplaces+selectedplace);
       this._spinner.show();
      return this._http.get(gettoadibatlaplaces+selectedplace)
          .map((res: Response) => res.json())
          .finally(()=>this._spinner.hide());
          //return buses;
    }
      public getFromAdibatla(selectedplace) : Observable<any>{
      console.log(getfromadibatlaplaces+selectedplace);
       this._spinner.show();
      return this._http.get(getfromadibatlaplaces+selectedplace)
          .map((res: Response) => res.json())
          .finally(()=>this._spinner.hide());
          //return buses;
    }
     public getWeather(latitude,longitude) : Observable<any>{
         console.log(getweather+"/"+latitude,longitude);
          return this._http.get(getweather+"q="+latitude+"_"+longitude)
          .map((res: Response) => res.json())
          .finally(()=>console.log("weather"));
          
    }

}

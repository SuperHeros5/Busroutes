import { Component, OnInit } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from'@angular/router';

@Component({
  
    selector: 'search',
    templateUrl: 'app/common/search.component.html',
     directives:[ROUTER_DIRECTIVES] 
})
export class SearchComponent implements OnInit {
    public flip=true;
    constructor() { }

    ngOnInit() { }
    public flipmethod(){
        if(this.flip){
            this.flip=false;
        }else{
        this.flip=true;
        }
    }

}
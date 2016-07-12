import { Component, OnInit } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES , ROUTER_PROVIDERS} from'@angular/router';
@Component({
    
    selector: 'header',
    templateUrl: 'app/common/header.component.html',
     directives:[ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
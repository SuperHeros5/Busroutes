import { Component , OnInit} from "@angular/core";
import {AuthenticationService,user } from '../shared/authentication.service';
@Component({
    selector:'admin-form',
    templateUrl : 'app/common/adminform.component.html',
    providers : [AuthenticationService]
})

export class AdminFormComponent implements OnInit{
    
    constructor(private _authenticateservice: AuthenticationService){
        
    }
    ngOnInit(){
        this._authenticateservice.checkcredentials();
    }
    
    logout(){
        this._authenticateservice.logout();
    }
    
}

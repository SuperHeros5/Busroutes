import {Component } from "@angular/core";
import {AuthenticationService,user } from '../shared/authentication.service';

@Component({
   selector : 'login-form',
   templateUrl : 'app/common/login.component.html',
   providers : [AuthenticationService]
})
export class LoginComponent{
    public user:user = new user('','');
    public errorMsg="";
    constructor(private _authenticationservice :AuthenticationService){
        
    }
    
    login(event){
        if(!this._authenticationservice.login(this.user)){
       this.errorMsg="Login Failed";
        }
       event.preventDefault();
    }
    
}
import {Injectable } from '@angular/core';
import { Router } from '@angular/router';


export  class user{
    
    constructor(public email:string,public password:string){        
    }
    
}

var users=[new user('ksivaganesh99@gmail.com','siva'),new user('admin','admin')];

@Injectable()
export class AuthenticationService{
    
    
    constructor(private _router : Router){
        
    }
    
    checkcredentials(){
                if(localStorage.getItem("user") === null){
                    this._router.navigate(['login']);
                }
    }
    
    login(user){
        let authenticatedUser  = users.find(u => u.email === user.email);
        if(authenticatedUser  && user.password === authenticatedUser .password){
            localStorage.setItem("user", authenticatedUser );
            this._router.navigate(['adminform']);
            return true;
        }
        return false;
    }
    
    
    logout(){
        localStorage.removeItem("user");
        this._router.navigate(['login']);
    }
    
    
    
    
    
}




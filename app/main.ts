import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS} from'@angular/router';
import { AppComponent } from './app.component';
import {bind} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// enableProdMode();

bootstrap(AppComponent,[ROUTER_PROVIDERS,bind(LocationStrategy).toClass(HashLocationStrategy)])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

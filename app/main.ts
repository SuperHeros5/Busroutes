import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS} from'@angular/router';
import { AppComponent } from './app.component';
import {bind} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { SpinnerService } from './shared/spinner.service';

// enableProdMode();

bootstrap(AppComponent,[ROUTER_PROVIDERS,bind(LocationStrategy).toClass(HashLocationStrategy),SpinnerService])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ApiComponent }  from './app.component';
import { ZipComponent }  from './app.component';

@NgModule({
	imports:      [ BrowserModule ],
	declarations: [ AppComponent, ApiComponent, ZipComponent ],
	bootstrap:    [ AppComponent, ApiComponent, ZipComponent ]
})

export class AppModule { }

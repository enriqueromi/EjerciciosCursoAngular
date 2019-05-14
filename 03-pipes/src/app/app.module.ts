import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrsenaPipe } from './pipes/contrsena.pipe';
registerLocaleData(localeEs);
 
@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, CapitalizadoPipe, DomseguroPipe, ContrsenaPipe ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }

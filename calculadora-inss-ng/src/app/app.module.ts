import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraInssComponent } from './calculadora-inss/calculadora-inss.component';
import { TabelaInssComponent } from './tabela-inss/tabela-inss.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraInssComponent,
    TabelaInssComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    registerLocaleData(localePt, 'pt-BR');
  }

}

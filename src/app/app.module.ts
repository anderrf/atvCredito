import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreditoService, CreditoModule } from './credito';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreditoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

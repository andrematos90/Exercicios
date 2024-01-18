import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerenciadorEventosComponent } from './components/gerenciador-eventos/gerenciador-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    GerenciadorEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

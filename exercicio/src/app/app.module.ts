import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiComponentComponent } from './components/pai-component/pai-component.component';
import { FilhoComponentComponent } from './components/filho-component/filho-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponentComponent,
    FilhoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

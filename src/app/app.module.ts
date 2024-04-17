import { NgModule } from '@angular/core';
import { NgxPayPalModule } from 'ngx-paypal';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,    
    NgxPayPalModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

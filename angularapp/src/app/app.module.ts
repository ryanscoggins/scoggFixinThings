import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

//PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { LivingRoomComponent } from './components/living-room/living-room.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { DiningRoomComponent } from './components/dining-room/dining-room.component';
import { BedroomComponent } from './components/bedroom/bedroom.component';
import { OtherComponent } from './components/other/other.component';
import { AboutComponent } from './components/about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivingRoomComponent,
    KitchenComponent,
    BathroomComponent,
    DiningRoomComponent,
    BedroomComponent,
    OtherComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

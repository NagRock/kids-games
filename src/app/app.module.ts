import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MemoryGameModule} from './memory-game/memory-game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemoryGameModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

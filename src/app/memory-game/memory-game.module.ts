import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { StartCountDownScreenComponent } from './start-count-down-screen/start-count-down-screen.component';
import {RouterModule} from '@angular/router';
import { RememberRandomImagesScreenComponent } from './remember-random-images-screen/remember-random-images-screen.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';


@NgModule({
  declarations: [WelcomeScreenComponent, StartCountDownScreenComponent, RememberRandomImagesScreenComponent, MemoryGameComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    WelcomeScreenComponent,
    StartCountDownScreenComponent,
    MemoryGameComponent,
  ]
})
export class MemoryGameModule {
}

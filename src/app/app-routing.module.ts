import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeScreenComponent} from './memory-game/welcome-screen/welcome-screen.component';
import {StartCountDownScreenComponent} from './memory-game/start-count-down-screen/start-count-down-screen.component';
import {RememberRandomImagesScreenComponent} from './memory-game/remember-random-images-screen/remember-random-images-screen.component';


const routes: Routes = [
  {
    path: 'welcome-screen',
    component: WelcomeScreenComponent,
  },
  {
    path: 'start-count-down-screen',
    component: StartCountDownScreenComponent,
  },
  {
    path: 'remember-random-images-screen',
    component: RememberRandomImagesScreenComponent,
  },
  {
    path: '**',
    component: WelcomeScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

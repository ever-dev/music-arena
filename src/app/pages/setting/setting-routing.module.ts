import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSetComponent } from './all-set/all-set.component';
import { MusicComponent } from './music/music.component';
import { MusicTypeComponent } from './music-type/music-type.component';
import { WelcomeComponent } from './welcome/welcome.component';

const settingRoutes: Routes = [{
    path: 'welcome',
    component: WelcomeComponent
  }, {
    path: 'music-type',
    component: MusicTypeComponent
  }, {
    path: 'music',
    component: MusicComponent
  }, {
    path: 'all',
    component: AllSetComponent
  }, {
      path: '',
      redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forChild(settingRoutes)],
  exports: [RouterModule]
})

export class SettingRoutingModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { MusicTypeComponent } from './music-type/music-type.component';
import { MusicComponent } from './music/music.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllSetComponent } from './all-set/all-set.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    MusicComponent,
    MusicTypeComponent,
    AllSetComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }

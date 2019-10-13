import { IonicModule } from '@ionic/angular';
import { SharedModule } from './../shared/shared.module';
import { TosComponent } from './tos/tos.component';
import { PolicyComponent } from './policy/policy.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    RecoveryComponent,
    PolicyComponent,
    TosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

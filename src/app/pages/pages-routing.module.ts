import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TosComponent } from './tos/tos.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { PolicyComponent } from './policy/policy.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'sign-in',
    component: SignInComponent
  }, {
    path: 'sign-up',
    component: SignUpComponent
  }, {
    path: 'recovery',
    component: RecoveryComponent
  }, {
    path: 'policy',
    component: PolicyComponent
  }, {
    path: 'tos',
    component: TosComponent
  }, {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingModule'
  }, {
    path: '',
    redirectTo: 'home'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {}

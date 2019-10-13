import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationInputComponent } from './components/validation-input/validation-input.component';

@NgModule({
  declarations: [
    ValidationInputComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ValidationInputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }

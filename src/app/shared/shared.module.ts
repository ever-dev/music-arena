import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidationInputComponent } from './components/validation-input/validation-input.component';

@NgModule({
  declarations: [
    ValidationInputComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ValidationInputComponent
  ]
})
export class SharedModule { }

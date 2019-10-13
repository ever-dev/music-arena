import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import {ValidationType, ValidationRules} from '../../interfaces/validation';

@Component({
  selector: 'app-validation-input',
  templateUrl: './validation-input.component.html',
  styleUrls: ['./validation-input.component.scss'],
})
export class ValidationInputComponent implements OnInit, OnChanges {
  @Input() validationRule: ValidationType;
  @Input() errorMessage: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Output() valueChangeEvent: EventEmitter<any> = new EventEmitter();
  hasError: boolean = false;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.validationRule && changes.validationRule.currentValue) {
      this.validationRule = changes.validationRule.currentValue;
    }
  }

  private checkValidation(value: string, validation: string): boolean {
    if (validation) {
      const validationRule = ValidationRules[validation];
      return validationRule.test(value);
    }
    return true;
  }

  onChange(ev: any) {
    if (!this.checkValidation(ev.detail.value, this.validationRule)) {
      this.hasError = true;
    } else {
      this.hasError = false;
    }
    this.valueChangeEvent.emit(ev.detail.value);
  }
}

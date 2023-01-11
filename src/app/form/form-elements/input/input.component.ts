import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => InputComponent
      ),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  public value: string = '';
  public changed: (value: string) => void;
  public touched: () => void;
  public isDisabled: boolean = false;

  constructor() { }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.changed = fn;

  }
  registerOnTouched(fn: any): void {
    this.touched = fn;

  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;

  }

}

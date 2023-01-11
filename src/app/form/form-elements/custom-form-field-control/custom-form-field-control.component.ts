import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable, Subject } from 'rxjs';

export interface FormFieldValue {
  query: string;
  scope: string;
}

@Component({
  selector: 'app-custom-form-field-control',
  templateUrl: './custom-form-field-control.component.html',
  styleUrls: ['./custom-form-field-control.component.scss'],
  providers: [{
    provide: MatFormFieldControl,
    useExisting: CustomFormFieldControlComponent
  }]
})
export class CustomFormFieldControlComponent implements OnInit, MatFormFieldControl<FormFieldValue> {
  
  // @Input() set value(value: FormFieldValue) {
  //   this._value = value;
  //   this.stateChanges.next();
  // }
  // get value() {
  //   return this._value;
  // }

  // private _value: FormFieldValue;
  
  constructor() { }
  value: FormFieldValue | null;
  stateChanges: Observable<void> = new Subject();
  id: string;
  placeholder: string;
  ngControl: NgControl | null;
  focused: boolean;
  empty: boolean;
  shouldLabelFloat: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string | undefined;
  autofilled?: boolean | undefined;
  userAriaDescribedBy?: string | undefined;
  setDescribedByIds(ids: string[]): void {
    throw new Error('Method not implemented.');
  }
  onContainerClick(event: MouseEvent): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

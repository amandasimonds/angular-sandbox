import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmailValidators, UniversalValidators } from 'ngx-validators';
import { FormModel } from './form-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public registrationForm: FormGroup;

  public passwordFieldType: string = 'password';

  get nameField(): FormControl {
    return this.registrationForm.get('name') as FormControl;
  }

  get emailField(): FormControl {
    return this.registrationForm.get('email') as FormControl;
  }

  get passwordField(): FormControl {
    return this.registrationForm.get('password') as FormControl;
  }

  get favouriteHexCodeValue(): string {
    return this.registrationForm.get('favouriteHexCode').value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public generateRegistrationForm(): void {
    this.registrationForm =
      new FormGroup({
        name: new FormControl(
          '',
          {
            validators: [
              Validators.required,
              UniversalValidators.noEmptyString
            ]
          }
        ),
        email: new FormControl(
          '',
          {
            validators: [
              Validators.required,
              EmailValidators.normal
            ]
          }
        ),
        password: new FormControl(
          '',
          {
            validators: [
              Validators.required,
              UniversalValidators.noWhitespace
            ]
          }
        ),
        favouriteHexCode: new FormControl('')
      });

  }
  public submitRegistrationForm(): void {
    if (this.registrationForm.valid) {
      const registrationRequest: FormModel = {
        ...this.registrationForm.value
      };

      // Success 🎉
      console.log({ registrationRequest });
    }
  }

  public togglePasswordVisible(): void {
    this.passwordFieldType =
      this.passwordFieldType === 'text'
        ? 'password'
        : 'text';
  }
}

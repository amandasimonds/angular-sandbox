import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormModel } from './form-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // public profileForm: FormGroup;

  public profileForm: FormGroup = new FormGroup({
    name: new FormControl()
  });

  public passwordFieldType: string = 'password';

  get nameField(): FormControl {
    return this.profileForm.get('name') as FormControl;
  }

  get emailField(): FormControl {
    return this.profileForm.get('email') as FormControl;
  }

  get passwordField(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }

  // get favouriteHexCodeValue(): string {
  //   return this.profileForm.get('favouriteHexCode').value;
  // }

  constructor() { }

  ngOnInit(): void {
  }

  public generateprofileForm(): void {
    this.profileForm =
      new FormGroup({
        name: new FormControl(
          '',
          {
            validators: [
            ]
          }
        ),
        email: new FormControl(
          '',
          {
            validators: [
            ]
          }
        ),
        password: new FormControl(
          '',
          {
            validators: [
            ]
          }
        ),
        favouriteHexCode: new FormControl('')
      });

  }
  public submitProfileForm(): void {
    if (this.profileForm.valid) {
      const registrationRequest: FormModel = {
        ...this.profileForm.value
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

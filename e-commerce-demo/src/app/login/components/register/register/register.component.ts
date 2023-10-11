import { Component, OnInit } from '@angular/core';
import { passwordValidator } from '../../../../share/validation/password.validation';
import { forbiddenName } from '../../../../share/validation/username.validation';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { RegisterService } from 'src/app/share/services/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, public registerServ: RegisterService) {}
  ngOnInit(): void {}

  registrationForm = this.fb.group(
    {
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('[a-zA-Z]*'),
          forbiddenName(/user/),
        ],
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
          ),
        ],
      ],
      password: [''],
      confirmPassword: [''],
      role: ['user'],
    },
    { validator: passwordValidator }
  );

  getUserName() {
    return this.registrationForm.get('userName');
  }
  getEmail() {
    return this.registrationForm.get('email');
  }

  getRole() {
    return this.registrationForm.get('role');
  }

  display() {
    return console.log(this.registrationForm);
  }
  updateApi() {
    this.registrationForm.patchValue({
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  registerNewUser() {
    this.registerServ.registerNewUser(this.registrationForm.value).subscribe(
      (response) => console.log('success'),
      (error) => console.log(error)
    );
  }
}

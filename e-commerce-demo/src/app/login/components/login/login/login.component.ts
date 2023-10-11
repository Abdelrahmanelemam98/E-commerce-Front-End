import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/share/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  token: any;
  decodedData: any;
  id: any;
  error = '';
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return; // Form is not valid
    }

    const userName = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(userName, password).subscribe(
      (data) => {
        this.token = data.token;
        this.decodedData = this.jwtHelper.decodeToken(this.token);

        if (this.token) {
          sessionStorage.setItem('token', this.token);
          sessionStorage.setItem('userId', JSON.stringify(this.decodedData.id));
          sessionStorage.setItem('role', JSON.stringify(this.decodedData.role));
          if (this.decodedData.role) {
            this.router.navigate(['/profile']);
          }
        }
      },
      (error: any) => {
        this.error = error;
      }
    );
  }
}

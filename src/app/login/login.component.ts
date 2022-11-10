import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginVal: string | undefined;

  passwordVal: string | undefined;

  get token() {
    return this.authService.user?.access_token || null;
  }

  get isLoggedIn() {
    return !!this.authService.user;
  }

  login() {
    if (!!this.loginVal && !!this.passwordVal) {
      this.authService.login(this.loginVal, this.passwordVal).catch((err) => {
        alert(err);
      });
    } else {
      alert('Set login and password');
    }
  }

  logout() {
    this.authService.logout();
  }

  go() {
    this.router.navigate(['/home']);
  }
}

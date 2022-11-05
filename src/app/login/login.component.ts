import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  user: User | undefined | null;

  loginVal: string | undefined;
  passwordVal: string | undefined;

  get token() {
    return this.user?.access_token || null;
  }

  login() {
    this.user = null;
    if (!!this.loginVal && !!this.passwordVal) {
      this.authService.login(this.loginVal, this.passwordVal).subscribe({
        next: (v) => (this.user = v),
        error: (e) => alert(e?.error?.error_description),
        complete: () => console.info('login complete'),
      });
    } else {
      alert('Set login and password');
    }
  }
}

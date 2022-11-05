import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.authApiUrl;

  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${login}:${password}`),
      }),
    };

    return this.http.post<User>(
      this.url,
      'grant_type=client_credentials',
      httpOptions
    );
  }
}

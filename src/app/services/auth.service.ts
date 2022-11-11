import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usr: User | undefined | null;
  private readonly url = environment.authApiUrl;
  private readonly key = 'userkey';

  get user(): User | undefined | null {
    return this.usr;
  }

  constructor(private http: HttpClient) {
    let st = localStorage.getItem(this.key);
    if (!!st) {
      let u = JSON.parse(st);
      this.usr = u;
    }
  }

  async login(login: string, password: string): Promise<User> {
    if (!!this.usr) throw new Error('Already logged in');

    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(`${login}:${password}`),
      },
      body: 'grant_type=client_credentials',
    };

    const fetchResponse = await fetch(this.url, settings);
    const data = await fetchResponse.json();

    if (fetchResponse.ok) {
      this.usr = data as User;
      console.info('login complete');
      localStorage.setItem(this.key, JSON.stringify(this.usr));
      return this.usr;
    } else {
      throw new Error(data.error_description);
    }
  }

  logout() {
    this.usr = null;
    localStorage.removeItem(this.key);
  }
}

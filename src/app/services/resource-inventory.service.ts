import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceInventoryService {
  readonly url = environment.resourceInventoryApiUrl;

  constructor(private http: HttpClient) {}

  check() {
    const res = this.http.get(this.url);
    res.forEach((i) => {
      let a = i;
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResourceInventoryService {
  readonly url = environment.resourceInventoryApiUrl;

  constructor(private http: HttpClient) {}

  async getIt(params: Map<string, any>): Promise<any> {
    const urlWithParams = new URL(this.url);
    Array.from(params.keys()).forEach((key) => {
      const val = params.get(key);

      if (Array.isArray(val)) {
        val.forEach((i) => {
          urlWithParams.searchParams.append(key, i.toString());
        });
      } else {
        urlWithParams.searchParams.append(key, val.toString());
      }
    });

    const sturi = urlWithParams.toString();

    const res = await this.http.get(sturi).toPromise();
    return res;
  }
}

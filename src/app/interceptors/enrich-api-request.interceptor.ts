import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class EnrichApiRequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // запрос на аутентификацию идет через fetch и сюда не попадает, незнамо почему. Поэтому отдельного условия сюда не добавляю

    if (!!this.authService.user) {
      const modifiedReq = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${this.authService.user.access_token}`)
          .set('x-user-name', 'admsk\\agermolov'),
      });
      return next.handle(modifiedReq);
    } else {
      return next.handle(request);
    }
  }
}

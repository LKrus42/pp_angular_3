import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Пока guard только редиректит отовлюду на компонент login - большего и не надо (не храним юзера и т.д.)
    //return true;

    // not logged in so redirect to login page with the return url

    // временно
    this.router.navigate(['/login']);
    // заменить, когда будут страницы кроме login
    //this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

    return false;
  }
}

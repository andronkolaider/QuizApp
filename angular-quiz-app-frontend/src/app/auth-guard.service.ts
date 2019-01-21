import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (document.cookie.includes("adminCookie=admin")) {
      return true;
    }
  }
}

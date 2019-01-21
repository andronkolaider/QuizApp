import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot) {
    var cookie = document.cookie.split(";");
    if (cookie.includes("adminCookie=admin")) {
      return true;
    }
  }
}

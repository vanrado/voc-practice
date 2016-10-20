import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,
  Route, CanLoad
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {Injectable, Inject} from "@angular/core";

export class AuthGuard implements CanActivate, CanLoad {
  constructor(@Inject(AuthService) private authService : AuthService,
              @Inject(Router) private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  canLoad(route: Route): boolean {
    console.log('can load checking path=', route.path);
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('checking loging');
    if (this.authService.loggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}

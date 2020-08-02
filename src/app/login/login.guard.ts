import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IAuth {
  user: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  private _user: string;
  public get user(): string {
    return this._user;
  }
  public set user(value: string) {
    this._user = value;
  }
  constructor(private router: Router, private http: HttpClient) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve, reject) => {
      this.http
        .get('assets/mockData/auth.json')
        .subscribe((response: IAuth) => {
          this._user = response.user;
          if (this._user === 'formAuthProvider') {
            resolve(true);
          }
          else {
            this.router.navigate(['vinSummary']);
            resolve(false);
          }
        })
    });

  }
}
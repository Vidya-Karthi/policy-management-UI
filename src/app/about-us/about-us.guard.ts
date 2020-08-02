import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from '../shared/services/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class AboutUsGuard implements CanActivate {
  constructor(private router:Router,private userInfoService: UserInfoService) {}
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userInfoService.checkRole();
  }  
}

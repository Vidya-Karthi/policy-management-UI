import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUserDetails } from '../dataModels/userDetails';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private userInfoDetails: IUserDetails;
  cache: Observable<IUserDetails>;
  private contextPath = environment.context;
  public userInfo: Observable<IUserDetails>;
  private authorities: any;
  private canEdit: boolean = false;


  constructor(private http: HttpClient, private router: Router) { }

  getUserInfo(): Observable<IUserDetails> {
    //below line is only for local testing where userName is passed as queryparam
    // const URL = `${this.contextPath}/getUserInfo/ISYS_IAG_USER1`;
    const URL = `${this.contextPath}/getUserInfo`;
    // Cache it once if value is false
    if (!this.cache) {
      this.cache = this.http.get(`${URL}`).pipe(
        map(data => this.mapUserDetails(data)),
        publishReplay(1), // this tells Rx to cache the latest emitted
        refCount() // and this tells Rx to keep the Observable alive as long as there are any Subscribers
      );
    }
    else {
      console.log("userInfo from cache");
    }
    return this.cache;
  }

  mapUserDetails(data: any) {
    this.userInfoDetails = data;
    return this.userInfoDetails;
  }
  // Clear configs
  clearCache() {
    this.cache = null;
  }

  checkRole(): Promise<boolean> {
    return new Promise((resolve) => {
      this.getUserInfo()
        .subscribe(data => {
          this.authorities = data.authorities;
          let validRole: boolean = this.checkAuthorities(this.authorities);
          if (validRole) {
            resolve(validRole);
          }
          else {
            this.router.navigate(['login']);
            resolve(false);
          }
        },
          error => {
            resolve(false);
          })
    });
  }

  checkAuthorities(authorities: any): boolean {
    //let authorities: string[] = this._userInfo.authorities;
    let validRoles: string[] = ['IPLUS_ISP_ENROLLED', 'IPLUS_ISP_DEALER', 'IPLUS_IAG_MGR', 'IPLUS_IAG_ADMIN', 'IPLUS_IAG'];
    let validRole: boolean = false;
    if (authorities) {
      for (let i = 0; i < authorities.length; i++) {
        if (authorities[i].authority === 'IPLUS_ISP_DEALER') {
          this.canEdit = true;
          break;
        }
      }
    }
    authorities.
      forEach(element => {
        validRoles.forEach(role => {
          if (role === element.authority) {
            validRole = true;
            return validRole;
          }
        });
      });
    return validRole;
  }

  editAccess() {
    return this.canEdit;
  }

  // return true if user has Dealer as role
  /*editAccess(): boolean {
    let editAccess: boolean = false;
    this.getUserInfo()
      .subscribe(data => {
        this.authorities = data.authorities;
        //console.log('auths fetched', this.authorities)
        if (this.authorities) {
          this.authorities.forEach(element => {
            if (element.authority == 'IPLUS_ISP_DEALER') {
              editAccess = true;
            }
          })
        }
      },
        error => {
          console.log("Error occured while fetching roles");
        }
      )
    return editAccess;
    // return true;
  } */

}

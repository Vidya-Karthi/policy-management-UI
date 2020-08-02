import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { map, startWith, mergeMap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { interval, empty } from 'rxjs';
import { load } from '@angular/core/src/render3';
import { Component, OnInit } from '@angular/core';
export interface IHeader {
  dealerCode: string;
  challengeNew: number;
  dealReviewNew: number;
}
@Injectable({
  providedIn: 'root'
})
export class ISPAppConfigService {
  private headerDetails: IHeader;
  private contextPath = environment.context;
  private selectedDealer: string;
  private selectedRegionName: string;
  private selectedTheme: string = 'Toyota';
  private selectedDealerCode: string;
  public getSelectedDealerCode(): string {
    return this.selectedDealerCode;
  }
  public setSelectedDealerCode(value: string) {
    this.selectedDealerCode = value;
  }
  public getSelectedTheme(): string {
    return this.selectedTheme;
  }
  public setSelectedTheme(value: string) {
    this.selectedTheme = value;
  }
  public getSelectedRegionName(): string {
    return this.selectedRegionName;
  }
  public setSelectedRegionName(value: string) {
    this.selectedRegionName = value;
  }

  public getSelectedDealer(): string {
    return this.selectedDealer;
  }
  public setSelectedDealer(value: string) {
    this.selectedDealer = value;
  }
  constructor(private http: HttpClient) { }

  public getHeaderDetails(): IHeader {
    return this.headerDetails;
  }
  public setHeaderDetails( notificationDetails: IHeader) {
    this.headerDetails = notificationDetails;
  }

  public cookieChunk(cookieData, preString, postString) {
    let dealerSubStr = [];
    const preIndex = cookieData.indexOf(preString);
    const searchIndex = cookieData.substring(preIndex).indexOf(postString);
    dealerSubStr = cookieData.substr(preIndex, searchIndex).split('=');
    return dealerSubStr;
  }
  public loadcookieData() {
   // const cookieData = 'JSESSIONID=7ClTeunvOiHC2IGGfw-4srMoyHneyMi3jNY6gI8l.iplusisp-node2-live-server-1; DealerDaily=SelectedUserName=138429&SelectedUserLastVisit=&SelectedUserFirstName=Subramanian&SelectedUserLastName=Thangavelu&SelectedDepotCode=08&SelectedDealer=15056&SelectedDealerName=SEWELL+LEXUS&SelectedMake=Lexus&SelectedDistrict=1&SelectedRegion=34&SelectedRegionAbbr=SOU&SelectedRegionName=LEXUS+SOUTHERN+AREA&SelectedUserLanguage=en&SelectedTheme=Lexus&SelectedDealerType=TMS&CP2URL=&SelectedEmailSubDomain=sewell-lexus-64204.dlrmail.com&SelectedUserNameSpace=DD&SessionLoginTime=07%2f09%2f2019+02%3a55%3a37+AM&UserHasMailBoxAccess=&UISelectedUserId=&SelectedUserAccountType=IT+Support+Admin; OAMAuthnCookie_iplus-isp-qaps.lexus.com:80=y5f1%2B%2BGoC8HvMxZcsLsVgLkfRaTpUiX6ES%2BL%2BLOWnV0bxAEWP7fZlNUEi1JEmMeTS%2FWtEhOxqWcPqsFpvAR2Xh%2FuyemtB8W9u62oCZ01bOMIG7mYiI2MnOMJWQR%2Fs9J%2BXBbtmNddzElt%2BnKQSprArOFAmBcn80%2FSfEqN1dkSnvhh8Ek0OrhCNXa5yN88o1wCeCFgxxxmJN9qWYDza5VgiSxBC8ZBugkiYlvahtDo%2BlrJvFIWhQ0FEx7%2F3FzBV%2FKo9dFqgtajpmzZABcSSHiNXtC7p0vCDlJ0VSBQuOXQ9MnAyeyRjmzNqt7BKYu3oOJwnvKb4ZGgnZcfNT56f2b%2BS9a%2FxA9a1ALJZylpI2qZfVJQJPOxWoKpXGW9EBlhgHu1Ghd3thz%2F%2FUG39kfwzWrJH%2FzcZSd%2Fuq8Es54rAScWoNOOrNfStFnLBiKJu3vy6hH6cqx%2Fz%2BwquwX9T%2BvElmbZ%2FQ%3D%3D';
    // const cookieData = 'smlanguage=en; ObSSOCookie=loggedoutcontinue; ddlanguage=en; dd_username_remember=138429; DDAuthCookie=pCp/4ee100c=; DealerDaily=SelectedUserName=138429&SelectedUserLastVisit=&SelectedUserFirstName=Subramanian&SelectedUserLastName=Thangavelu&SelectedDepotCode=23&SelectedDealer=15056&SelectedDealerName=SEEGER+TOYOTA&SelectedMake=Toyota&SelectedDistrict=2&SelectedRegion=23&SelectedRegionAbbr=KC&SelectedRegionName=KANSAS+CITY+REGION&SelectedUserLanguage=en&SelectedTheme=Toyota&SelectedDealerType=TMS&CP2URL=&SelectedEmailSubDomain=seeger-toyota-24022.dlrmail.com&SelectedUserNameSpace=DD&SessionLoginTime=04%2f26%2f2019+03%3a56%3a00+AM&UserHasMailBoxAccess=&UISelectedUserId=&SelectedUserAccountType=IT+Support+Admin';
    const cookieData = document.cookie;
    const preString = "SelectedDealer=";
    const preStringDealerName = "SelectedDealerName=";
    const preStringDealerRegionName = "SelectedRegionName";
    const postString = "&";
    const cookieArr = this.cookieChunk(cookieData, preString, postString);
    
    if (cookieArr.length && cookieArr[0] !== '') {
    this.setSelectedDealer(this.cookieChunk(cookieData, preStringDealerName, postString)[1]);
    this.setSelectedDealer(decodeURIComponent(this.removePlusSymbol(this.getSelectedDealer())));
    
    this.setSelectedRegionName(this.cookieChunk(cookieData, preStringDealerRegionName, postString)[1]);
    this.setSelectedRegionName(decodeURIComponent(this.removePlusSymbol(this.getSelectedRegionName())));

    if(location.host.indexOf('lexus.com') > 0){
      this.setSelectedTheme('Lexus');
    }
    this.setSelectedDealerCode(cookieArr[1]);
      //return cookieArr[1];    
    }
  }
  private removePlusSymbol(str) {
    if(str.indexOf('+') > 0){
      return str.replace(new RegExp('\\+', 'g'), ' ');
    }
    return str;
  }
  load() {
    const URL = `${this.contextPath}/notification/getNotification/`;
    this.loadcookieData();
    const dealerCode = this.getSelectedDealerCode();
    this.setHeaderDetails({ dealerCode: '', challengeNew: 0, dealReviewNew: 0 });
    this.headerDetails['dealerCode'] = dealerCode;
    this.http
        .get(`${URL}${dealerCode}`)
        .subscribe((response: IHeader) => {
          this.setHeaderDetails(response);
        },
          error => {
            console.log('error:', error);
          }
        )
    /*
    return new Promise((resolve, reject) => {
      this.http
        .get(`${URL}${dealerCode}`)
        .subscribe((response: IHeader) => {
          this.headerDetails = response;
          resolve(true);
        },
          error => {
            console.log('error:', error);
          }
        )
      })  */
    } 
  }
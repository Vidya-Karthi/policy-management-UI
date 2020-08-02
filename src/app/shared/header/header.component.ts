import { Component, OnInit, Renderer2 } from '@angular/core';
import { ISPAppConfigService } from '../services/isp-app-config.service';
import {TranslateService} from '@ngx-translate/core';
import { DataSharingService } from '../services/data-sharing.service';
import { UserInfoService } from '../services/user-info.service';
import { IUserDetails } from '../dataModels/userDetails';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public headerObj: any ;
 public cookiedealerCode: string;
 public contextPath: string = environment.context;
 public region: string;
 public dealerName: string;
 public dealerTheme: string;
 public dealerDisplayName: string;
 public dealerEmail: string;
 constructor(private ispAppConfigService: ISPAppConfigService,private dataService: DataSharingService,
  translate: TranslateService,private userInfoService: UserInfoService, private renderer: Renderer2) {
    translate.addLangs(['en']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use('en');
    //this.headerObj = this.ispAppConfigService.getHeaderDetails();
    this.cookiedealerCode = this.ispAppConfigService.getSelectedDealerCode();
    this.region = this.ispAppConfigService.getSelectedRegionName();
    this.dealerName = this.ispAppConfigService.getSelectedDealer();
    this.dealerTheme = this.ispAppConfigService.getSelectedTheme();
    if(this.dealerTheme !== undefined || this.dealerTheme !== null){
      this.renderer.removeClass(document.body, 'Toyota');
      this.renderer.addClass(document.body, this.dealerTheme);
    }
    // this.userInfoService.getUserInfo().subscribe(data => {
    // this.dealerEmail = data.emailId
    // this.dealerDisplayName = data.displayName
    // });
}

  ngOnInit() {
    this.dataService.currentDealerCode.subscribe(value => this.cookiedealerCode = value)
  }

}

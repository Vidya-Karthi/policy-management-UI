import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISPAppConfigService } from '../services/isp-app-config.service';

@Injectable()
export class DataSharingService {
    public dealerCode: BehaviorSubject<string>;
    public currentDealerCode

    constructor(private ispAppConfigService: ISPAppConfigService) {
        this.dealerCode = new BehaviorSubject<string>(this.ispAppConfigService.getSelectedDealerCode());
        this.currentDealerCode = this.dealerCode.asObservable();
    }
    changeMessage(message: string) {
        this.dealerCode.next(message)
    }
    
}    
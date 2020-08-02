import { TestBed } from '@angular/core/testing';
import { ISPAppConfigService } from './isp-app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { configureTestSuite } from '../../shared/testConfig.spec';

describe('ISPAppConfigService', () => {
  configureTestSuite();
  
  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule],
    });
    await TestBed.compileComponents();
  })().then(done).catch(done.fail));

  /*beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, HttpClientTestingModule],
  }));*/

  it('should be created', () => {
    const service: ISPAppConfigService = TestBed.get(ISPAppConfigService);
    expect(service).toBeTruthy();
  });

  it('should call load function',() => {
    const service: ISPAppConfigService = TestBed.get(ISPAppConfigService);
    service['contextPath'] = '/iplus-isp-0.0.1-SNAPSHOT';
    let document = new Document;
    document.cookie = "DealerDaily=SelectedDealer=64211&SelectedDealerName=SEWELL LEXUS&SelectedTheme=Lexus&SelectedRegionName=KANSAS CITY REGION&expires=Thu, 08 Aug 2019 06:33:21 GMT"; 
    service['selectedDealerCode'] = '64211';
    service.load();
  })
});

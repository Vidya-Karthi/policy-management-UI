import { TestBed } from '@angular/core/testing';

import { IspHttpResponseHandlerService } from './isp-http-response-handler.service';
import { HttpClientModule, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { LoaderService } from '../loader/ip-loader.service';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { configureTestSuite } from '../../shared/testConfig.spec';

describe('IspHttpResponseHandlerService', () => {
  configureTestSuite();
  
  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
    providers: [
      LoaderService
    ]
    });
    await TestBed.compileComponents();
  })().then(done).catch(done.fail));

  /*beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule, HttpClientTestingModule ],
    providers: [
      LoaderService
    ]
  }));*/

  it('should be created', () => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    expect(service).toBeTruthy();
  });

  it('should be check the functionlaity of onSuccess of http response handler',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let loaderServ = TestBed.get(LoaderService);
    spyOn(loaderServ,'hide');
    let response  = { header: null,
                  responseMessage: "0",
                  result:{ numItems: "28",
                           pageNumber: "0",
                           params: null,
                           results: [{ brand: "Toyota",
                                       brandId: 18,
                                       caseNo: null,
                                       challengeAmt: 1000,
                                       challengeDispositionDate: null,
                                       challengeLastUpdateDate: "07/18/2019",
                                       challengeNo: 1191532,
                                       challengeStatus: "Submitted",
                                       challengeSubmitDate: "07/18/2019",
                                       customerName: "ANAYA,MICHEAL",
                                       dealerCode: "15056",
                                       dealerName: "Legends Toyota",
                                       dealerVwdFlg: null,
                                       decisionStatusL1: null,
                                       decisionStatusL2: null,
                                       dispositionReason: null,
                                       iagChallengeLastUpdateDate: "07/18/2019",
                                       iagChallengeStatus: "Submitted",
                                       incentiveCategory: "Customer",
                                       incentiveTypeAmt: null,
                                       incentiveTypeName: "Customer Cash",
                                       incentiveTypeNo: 142062,
                                       level1DecisionDate: null,
                                       level2DecisionDate: null,
                                       modelNo: "1872",
                                       modelYear: "2019",
                                       optionType: "Cash",
                                       programId: "230-201811-NATL-00011656",
                                       rdrDate: "11/30/2018",
                                       region: "230",
                                       regionName: "Kansas City",
                                       retailDate: "11/29/2018",
                                       serialNo: "KC201971",
                                       series: "Corolla",
                                       seriesId: 8,
                                       typeSalesCode: "1",
                                       vin: "2T1BPRHE8KC201971"
                                      }],
                                totalPages: "1",
                                totalResults: "28"
                          }
                        }
    service.onSuccess(response);
    expect(loaderServ.hide).toHaveBeenCalled();                       
  });

  it('should be checking the error response for http handler fro 404 status error',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let response = {      
      error: "<html><head><title>Error</title></head><body>Not Found</body></html>",
      headers: new HttpHeaders,
      message: "Http failure response for http://localhost:4200/iplus-isp-0.0.1-SNAPSHOT/vinsummary/getPamentStatus: 404 Not Found",
      name: "HttpErrorResponse",
      ok: false,
      status: 404,
      statusText: "Not Found",
      url: "http://localhost:4200/iplus-isp-0.0.1-SNAPSHOT/vinsummary/getPamentStatus"
    }
    spyOn(console,'error');
    let source = new Observable;
    service.onCatch(response,source);
    expect(console.error).toHaveBeenCalled();
  })

  it('should be checking the error response for http handler for 400 status error',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let response = new HttpErrorResponse({error: [{message: " 400 Error"}],status:400});
    spyOn(console,'error');
    let source = new Observable;
    service.onCatch(response,source);
    expect(console.error).toHaveBeenCalled();
  })

  it('should be checking the error response for http handler for 401 status unauthorized error',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let response = new HttpErrorResponse({status:401});
    spyOn(console,'error');
    let source = new Observable;
    service.onCatch(response,source);
    expect(console.error).toHaveBeenCalled();
  })

  it('should be checking the error response for http handler for 403 status forbidden error',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let response = new HttpErrorResponse({status:403});
    spyOn(console,'error');
    let source = new Observable;
    service.onCatch(response,source);
    expect(console.error).toHaveBeenCalled();
  })

  it('should be checking the error response for http handler for 500 status internal server error',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let response = new HttpErrorResponse({status:500});
    spyOn(console,'error');
    let source = new Observable;
    service.onCatch(response,source);
    expect(console.error).toHaveBeenCalled();
  })

  it('should be checking the error response for http handler for default error',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let response = new HttpErrorResponse({status:0});
    spyOn(console,'error');
    let source = new Observable;
    service.onCatch(response,source);
    expect(console.error).toHaveBeenCalled();
  });

  it('checking show loader for the http handlers',() => {
    const service: IspHttpResponseHandlerService = TestBed.get(IspHttpResponseHandlerService);
    let loaderServ = TestBed.get(LoaderService);
    spyOn(loaderServ,'show');
    service.showLoader();
    expect(loaderServ.show).toHaveBeenCalled();                       
  });
});

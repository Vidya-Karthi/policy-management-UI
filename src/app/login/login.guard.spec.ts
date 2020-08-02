import { TestBed, inject } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpHandler,HttpClient } from '@angular/common/http';
import { configureTestSuite } from '../shared/testConfig.spec';

describe('LoginGuard', () => {
  configureTestSuite();
  
  beforeAll(done => (async () => {
    TestBed.configureTestingModule({
      imports : [
        RouterTestingModule],
      providers: [LoginGuard,HttpClient,HttpHandler]
    });
    await TestBed.compileComponents();
  })().then(done).catch(done.fail));

  /*beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        RouterTestingModule],
      providers: [LoginGuard,HttpClient,HttpHandler]
    });
  });*/

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});

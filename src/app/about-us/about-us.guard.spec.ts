import { TestBed, async, inject } from '@angular/core/testing';

import { AboutUsGuard } from './about-us.guard';

describe('AboutUsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutUsGuard]
    });
  });

  it('should ...', inject([AboutUsGuard], (guard: AboutUsGuard) => {
    expect(guard).toBeTruthy();
  }));
});

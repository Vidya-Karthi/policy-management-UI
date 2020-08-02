import { TestBed, async, inject } from '@angular/core/testing';

import { ContactUsGuard } from './contact-us.guard';

describe('ContactUsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactUsGuard]
    });
  });

  it('should ...', inject([ContactUsGuard], (guard: ContactUsGuard) => {
    expect(guard).toBeTruthy();
  }));
});

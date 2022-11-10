import { TestBed } from '@angular/core/testing';

import { EnrichApiRequestInterceptor } from './enrich-api-request.interceptor';

describe('EnrichApiRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EnrichApiRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EnrichApiRequestInterceptor = TestBed.inject(EnrichApiRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

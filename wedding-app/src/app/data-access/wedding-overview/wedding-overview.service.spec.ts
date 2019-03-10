import { TestBed } from '@angular/core/testing';

import { WeddingOverviewService } from './wedding-overview.service';

describe('WeddingOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeddingOverviewService = TestBed.get(WeddingOverviewService);
    expect(service).toBeTruthy();
  });
});

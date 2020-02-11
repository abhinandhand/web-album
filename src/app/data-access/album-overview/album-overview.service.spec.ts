import { TestBed } from '@angular/core/testing';

import { AlbumOverviewService } from './album-overview.service';

describe('AlbumOverviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumOverviewService = TestBed.get(AlbumOverviewService);
    expect(service).toBeTruthy();
  });
});

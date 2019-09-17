import { TestBed } from '@angular/core/testing';

import { ReaderjsonService } from './readerjson.service';

describe('ReaderjsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReaderjsonService = TestBed.get(ReaderjsonService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ResourceInventoryService } from './resource-inventory.service';

describe('ResourceInventoryService', () => {
  let service: ResourceInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

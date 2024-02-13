import { TestBed } from '@angular/core/testing';

import { ManipularService } from './manipular.service';

describe('ManipularService', () => {
  let service: ManipularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManipularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

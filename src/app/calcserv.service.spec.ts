import { TestBed } from '@angular/core/testing';

import { CalcservService } from './calcserv.service';

describe('CalcservService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcservService = TestBed.get(CalcservService);
    expect(service).toBeTruthy();
  });
});

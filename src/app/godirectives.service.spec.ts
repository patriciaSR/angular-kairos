import { TestBed } from '@angular/core/testing';

import { GodirectivesService } from './godirectives.service';

describe('GodirectivesService', () => {
  let service: GodirectivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodirectivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

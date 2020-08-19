import { TestBed } from '@angular/core/testing';

import { RecipeWebService } from './recipeweb.service';

describe('RecipeService', () => {
  let service: RecipeWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

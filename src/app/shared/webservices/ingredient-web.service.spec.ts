import { TestBed } from '@angular/core/testing';

import { IngredientWebService } from './ingredient-web.service';

describe('IngredientWebService', () => {
  let service: IngredientWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

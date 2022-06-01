import { TestBed } from '@angular/core/testing';

import { ShoppingListItemsService } from './shopping-list-items.service';

describe('ShoppingListItemsService', () => {
  let service: ShoppingListItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

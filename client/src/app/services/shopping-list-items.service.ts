import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ShoppingListItem } from '../models/shopping-list-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListItemsService {

  //readonly apiURL = "http://localhost:5000/api/ShoppingListItems";
  readonly url = environment.apiURL + '/api/ShoppingListItems';

  constructor(private http: HttpClient) { }

  items: ShoppingListItem[];

  getShoppingListItems(): Observable<ShoppingListItem[]> {
    return this.http.get<ShoppingListItem[]>(this.url).pipe(tap(res => this.items = res));
  }

  getShoppingListItem(itemId: number): Observable<ShoppingListItem> {
    return this.http.get<ShoppingListItem>(this.url + '/' + itemId);
  }

  putShoppingListItem(item: ShoppingListItem): Observable<ShoppingListItem> {
    return this.http.put<ShoppingListItem>(this.url + '/' + item.ItemId, item);//.pipe(tap(res => this.items = [...this.items, res]));
  }

  postShoppingListItem(item: ShoppingListItem): Observable<ShoppingListItem> {
    return this.http.post<ShoppingListItem>(this.url, item);//.pipe(tap(res => this.items = [...this.items, res]));
  }

  deleteShoppingListItem(itemId: number): Observable<ShoppingListItem> {
    return this.http.delete<ShoppingListItem>(this.url + '/' + itemId);
  }

  
}

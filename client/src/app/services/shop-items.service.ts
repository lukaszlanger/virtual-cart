import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShopItem } from '../models/shop-item';

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {

  //readonly apiURL = "http://localhost:5000/api/ShopItems";
  readonly apiURL = "https://longshinydog20.conveyor.cloud/api/ShopItems";

  constructor(private http: HttpClient) { }

  items: ShopItem[];

  getShopItems(): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.apiURL).pipe(tap(res => this.items = res));
  }

  getShopItem(id: number): Observable<ShopItem> {
    return this.http.get<ShopItem>(this.apiURL+ '/' + id);
  }

  postShopItem(item: ShopItem): Observable<ShopItem> {
    return this.http.post<ShopItem>(this.apiURL, item);
  }

  putShopItem(item: ShopItem): Observable<ShopItem> {
    return this.http.put<ShopItem>(this.apiURL+ '/' + item.ItemId, item);
  }

  
}


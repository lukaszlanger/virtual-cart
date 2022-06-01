import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopItem } from '../models/shop-item';

@Injectable({
  providedIn: 'root'
})

export class ShopItemsService {

  //readonly apiURL = "http://localhost:5000/api/ShopItems";
  readonly apiURL = "https://longshinydog20.conveyor.cloud/api/ShopItems";

  constructor(private http: HttpClient) { }

  getShopItems() {
    return this.http.get(this.apiURL);
  }

  getShopItem(id: number): Observable<ShopItem> {
    return this.http.get<ShopItem>(this.apiURL+ '/' + id);
  }

  postShopItem(val: ShopItem) {
    return this.http.post(this.apiURL, val);
  }

  putShopItem(item: ShopItem): Observable<ShopItem> {
    return this.http.put<ShopItem>(this.apiURL+ '/' + item.ItemId, item);
  }
}


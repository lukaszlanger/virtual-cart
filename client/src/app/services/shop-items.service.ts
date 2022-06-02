import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ShopItem } from '../models/shop-item';

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {

  //readonly apiURL = "http://localhost:5000/api/ShopItems";
  //readonly apiURL = "https://longshinydog20.conveyor.cloud/api/ShopItems";
  readonly url = environment.apiURL + '/api/ShopItems';

  constructor(private http: HttpClient) { }

  items: ShopItem[];
  summary: number;

  getShopItems(): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.url).pipe(tap(res => this.items = res));
  }

  getShopItem(id: number): Observable<ShopItem> {
    return this.http.get<ShopItem>(this.url + '/' + id);
  }

  postShopItem(item: ShopItem): Observable<ShopItem> {
    return this.http.post<ShopItem>(this.url, item);
  }

  putShopItem(item: ShopItem): Observable<ShopItem> {
    return this.http.put<ShopItem>(this.url + '/' + item.ItemId, item);
  }
}
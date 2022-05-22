import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';
import { ShopItem } from '../models/shop-item';
import { ShopItemsService } from '../services/shop-items.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController, private shopItemsService: ShopItemsService, private http: HttpClient) {}

  public items: ShopItem[];

  ngOnInit(): void {
    this.shopItemsService.getShopItems().subscribe((data: ShopItem[]) => this.items = data);
  }

  async deleteItem(item: ShopItem) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Usuń',
      message: 'Czy na pewno chcesz usunąć ten przedmiot z koszyka?',
      buttons: [
        {
          text: 'Tak',
          role: 'confirm',
          id: 'confirm-button',
          handler: () => {
            item.ItemScanned = false;
            this.shopItemsService.putShopItem(item).subscribe(data => console.log('Item deleted!'));
          }
        }, {
          text: 'Nie',
          id: 'cancel-button',
          handler: () => {
            console.log('Delete cancelled');
          }
        }
      ]
    });

    await alert.present();
  }

  scanned(item: ShopItem) {
    item.ItemScanned = true;
    this.shopItemsService.putShopItem(item).subscribe(data => console.log('Item scanned!'));
  }

  getShopItem(id: number)
  {
    console.log(this.shopItemsService.getShopItem(id).subscribe());
  }

  async scan() {
    this.barcodeScanner.scan().then(async (barcodeData) => {
      if(barcodeData.text != '')
      {
        const item = this.items.find(i => i.ItemBarcode == barcodeData.text);
        if(item)
          this.scanned(item);
        else
          alert("dodaj item");
      }
      }, async (err)=>{
        const alert = await this.alertController.create({
        header: 'Wystąpił błąd :(',
        message: JSON.stringify(err),
      });
        await alert.present();
      })
  }
  

  // async scan()
  // {
  //   this.barcodeScanner.scan().then(async (barcodeData) => {
  //     if(barcodeData.text != '')
  //     {
  //       this.addItem('Test', Number(barcodeData.text), 2.99);
  //       this.addItem('Test', 4367652, 2.97);
  //     }
  //   }, async (err)=>{
  //     const alert = await this.alertController.create({
  //       header: 'Wystąpił błąd',
  //       message: JSON.stringify(err),
  //     });
  //     await alert.present();
  //   })
  // }
}

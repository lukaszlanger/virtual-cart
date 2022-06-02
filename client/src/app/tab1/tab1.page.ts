import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ShopItem } from '../models/shop-item';
import { ShopItemsService } from '../services/shop-items.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController, private shopItemsService: ShopItemsService, private router: Router) {}

  item: ShopItem = new ShopItem;

  ngOnInit(): void {
    this.shopItemsService.getShopItems().subscribe((data: ShopItem[]) => 
    {
      this.shopItemsService.items = data;
      this.sum();
    }
  )
  }

  sum() {
    this.shopItemsService.summary = 0;
    this.shopItemsService.items.forEach(element => {
      if(element.ItemScanned)
        this.shopItemsService.summary += element.ItemPrice;
    })
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
            this.shopItemsService.putShopItem(item).subscribe(data => {
              console.log('Item deleted!' + data);
              this.sum();
            })
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

  async info(id: number) {
    var item = this.shopItemsService.items.find(i => i.ItemId === id);
    const alert = await this.alertController.create({
      header: 'Info',
      message: 'Produkt: ' + item.ItemName + '\n' +
              'Producent: ' + item.ItemManufacturer + '\n' +
              'Kod kreskowy: ' + item.ItemBarcode + '\n' +
              'Cena: ' + item.ItemPrice
    });
    await alert.present();
  }

  scanned(item: ShopItem) {
    item.ItemScanned = true;
    this.shopItemsService.putShopItem(item).subscribe(data => console.log('Item scanned!'));
    this.sum();
  }

  async scan() {
    this.barcodeScanner.scan().then(async (barcodeData) => {
      if(barcodeData.text != '')
      {
        var item = this.shopItemsService.items.find(i => i.ItemBarcode === barcodeData.text);
        if(item) {
          if(item.ItemScanned)
            alert("Ten przedmiot jest już zeskanowany!");
          else
            this.scanned(item);
        }
        else {
          this.router.navigateByUrl('tabs/tab1/form/' + barcodeData.text);
        }
      }
      }, async (err)=>{
        const alert = await this.alertController.create({
        header: 'Wystąpił błąd :(',
        message: JSON.stringify(err),
      });
        await alert.present();
      })
  }
}

import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController) {}

  public items = [
    {name: 'Coca Cola', barcode: 123451, price: 4.95},
    {name: 'Pepsi', barcode: 74523451, price: 4.55}
  ];

  async scan()
  {
    this.addItem('Test', 4367652, 2.96);
    this.barcodeScanner.scan().then(async (barcodeData) => {
      if(barcodeData.text != '')
      {
        this.addItem('Test', Number(barcodeData.text), 2.99);
        this.addItem('Test', 4367652, 2.97);
      }
    }, async (err)=>{
      const alert = await this.alertController.create({
        header: 'Wystąpił błąd',
        message: JSON.stringify(err),
      });
      await alert.present();
    })
  }

  addItem(name: string, barcode: number, price: number)
  {
    this.items.push({name: name, barcode: barcode, price: price});
  }

  async deleteItem(barcode: number) {
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
            this.items.forEach((value,index)=>{
              if(value.barcode==barcode) this.items.splice(index,1);
            })
          }
        }, {
          text: 'Nie',
          id: 'cancel-button',
          handler: () => {
            console.log('Usuwanie anulowane');
          }
        }
      ]
    });

    await alert.present();
  }
}

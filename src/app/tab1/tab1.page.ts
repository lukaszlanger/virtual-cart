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

  public listNumber: number = 0;
  public itemString: string = '';
  items: string[];

  async scan()
  {
    this.barcodeScanner.scan().then(async (barcodeData) => {
      /*const alert = await this.alertController.create({
        header: 'Kod kreskowy',
        message: barcodeData.text,
      });
      await alert.present();*/
      if(barcodeData.text != '')
      {
        this.listNumber++;
        this.addItemToList(barcodeData.text);
      }
    }, async (err)=>{
      const alert = await this.alertController.create({
        header: 'Wystąpił błąd',
        message: JSON.stringify(err),
      });
      await alert.present();
    })
  }

  addItemToList(item: string)
  {

    this.itemString += `
      <ion-item>
        <ion-avatar item-start>
          <img width="50" height="50" src="assets\\img\\item.png">
        </ion-avatar>
        <ion-label>${item}</ion-label>
        <ion-note item-end>3:43 pm</ion-note>
      </ion-item>
      <br>
    `;

    return this.itemString;
  }

   generateList() {
    return `
    <ion-list>
      ${this.itemString}
    </ion-list>
  `;
  }


}

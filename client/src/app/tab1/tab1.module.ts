import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ShopItemsService } from '../services/shop-items.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopItemFormPageModule } from '../forms/shop-item-form/shop-item-form.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShopItemFormPageModule
  ],
  declarations: [Tab1Page],
  providers: [
    BarcodeScanner,
    ShopItemsService]
})
export class Tab1PageModule {}

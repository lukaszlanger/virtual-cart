import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopItemFormPageRoutingModule } from './shop-item-form-routing.module';

import { ShopItemFormPage } from './shop-item-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopItemFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShopItemFormPage]
})
export class ShopItemFormPageModule {}

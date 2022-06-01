import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListItemsPageRoutingModule } from './shopping-list-items-routing.module';

import { ShoppingListItemsPage } from './shopping-list-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListItemsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ShoppingListItemsPage]
})
export class ShoppingListItemsPageModule {}

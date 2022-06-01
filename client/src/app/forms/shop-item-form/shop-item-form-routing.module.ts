import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopItemFormPage } from './shop-item-form.page';

const routes: Routes = [
  {
    path: '',
    component: ShopItemFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopItemFormPageRoutingModule {}

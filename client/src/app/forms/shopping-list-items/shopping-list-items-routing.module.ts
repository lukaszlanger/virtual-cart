import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListItemsPage } from './shopping-list-items.page';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListItemsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab1/form/:itembarcode',
        loadChildren: () => import('../forms/shop-item-form/shop-item-form.module').then(m => m.ShopItemFormPageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab2/form',
        loadChildren: () => import('../forms/shopping-list-item-form/shopping-list-items.module').then(m => m.ShoppingListItemsPageModule)
      },
      {
        path: 'tab2/form/:itemid',
        loadChildren: () => import('../forms/shopping-list-item-form/shopping-list-items.module').then(m => m.ShoppingListItemsPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

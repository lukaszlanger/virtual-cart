import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    // children: [
    //   {
    //     path: 'tab2/form',
    //     loadChildren: () => import('../forms/shopping-list-items/shopping-list-items.module').then(m => m.ShoppingListItemsPageModule)
    //   }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

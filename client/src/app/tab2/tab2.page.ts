import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ShoppingListItem } from '../models/shopping-list-item';
import { ShoppingListItemsService } from '../services/shopping-list-items.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private shoppingListItemsService: ShoppingListItemsService, private alertController: AlertController, private router: Router) {}

  ngOnInit(): void {
    this.getAllShoppingListItems();
    //.subscribe((data: ShoppingListItem[]) => this.items = data);
  }

  getAllShoppingListItems() {
    this.shoppingListItemsService.getShoppingListItems().subscribe((data: ShoppingListItem[]) => this.shoppingListItemsService.items = data);
  }

  itemBought(item: ShoppingListItem)
  {
    item.ItemBought = true;
    this.shoppingListItemsService.putShoppingListItem(item).subscribe();/*
      response => {
        this.getAllShoppingListItems()}
    );*/
  }

  buyAgain(item: ShoppingListItem)
  {
    item.ItemBought = false;
    this.shoppingListItemsService.putShoppingListItem(item).subscribe();/*
      response => {
        this.getAllShoppingListItems()}
    );*/
  }

  delete(itemId: number) {
    this.shoppingListItemsService.deleteShoppingListItem(itemId).subscribe(
      response => {
        this.getAllShoppingListItems()}
    );
  }

  add() {
    this.router.navigateByUrl('tabs/tab2/form');
  }

  edit(itemId: number) {
    this.router.navigateByUrl('tabs/tab2/form/' + itemId);
  }
}

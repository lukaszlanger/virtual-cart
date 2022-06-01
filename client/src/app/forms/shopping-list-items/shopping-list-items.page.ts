import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ShoppingListItem } from 'src/app/models/shopping-list-item';
import { ShoppingListItemsService } from 'src/app/services/shopping-list-items.service';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.page.html',
  styleUrls: ['./shopping-list-items.page.scss'],
})
export class ShoppingListItemsPage implements OnInit {

  item: ShoppingListItem = {
    ItemId: null,
    ItemName: '',
    ItemDescription: '',
    ItemBought: false,
    ItemQuantity: 1
  };
  cleanItem: ShoppingListItem = {
    ItemId: null,
    ItemName: '',
    ItemDescription: '',
    ItemBought: false,
    ItemQuantity: 1
  };
  itemId: number;

  public formData: FormGroup;

  constructor(private shoppingListItemsService: ShoppingListItemsService, private router: Router, private route: ActivatedRoute, public formBuilder: FormBuilder) {
    this.itemId = Number.parseInt(this.route.snapshot.paramMap.get('itemid'));
    /*this.formData = this.formBuilder.group({
      ItemName: [this.item.ItemName, Validators.compose([Validators.required])],
      ItemDescription: [this.item.ItemDescription],
      ItemQuantity: [this.item.ItemQuantity, Validators.compose([Validators.required])],
      ItemBought: [false, Validators.compose([Validators.required])]
    });*/
    this.formData = this.formBuilder.group({
      _itemName: new FormControl(this.item.ItemName, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      _itemDescription: new FormControl(this.item.ItemDescription),
      _itemQuantity: new FormControl(this.item.ItemQuantity, [Validators.required, Validators.max(10000), Validators.min(0)])
    })
  }

  ngOnInit() {
    if(this.itemId > 0)
      this.getItem(this.itemId);
  }

  getItem(itemId: number) {
    this.shoppingListItemsService.getShoppingListItem(itemId).subscribe(res => {this.item = res});
  }

  getAllShoppingListItems() {
    this.shoppingListItemsService.getShoppingListItems().subscribe((data: ShoppingListItem[]) => this.shoppingListItemsService.items = data);
  }

  onSubmit() {
    if(this.itemId > 0)
      this.editItem(this.item);
    else
      this.addItem(this.item);
    this.item = this.cleanItem;
    this.btnGoBack();
  }

  addItem(item: ShoppingListItem) {
    this.shoppingListItemsService.postShoppingListItem(item).subscribe(response => {this.getAllShoppingListItems()});
  }

  editItem(item: ShoppingListItem) {
    this.item = item;
    this.shoppingListItemsService.putShoppingListItem(this.item).subscribe(response => {this.getAllShoppingListItems()});
  }

  btnGoBack() {
    this.router.navigateByUrl('/tabs/tab2');
  }
}

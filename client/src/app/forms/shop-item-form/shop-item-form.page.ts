import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopItem } from 'src/app/models/shop-item';
import { ShopItemsService } from 'src/app/services/shop-items.service';

@Component({
  selector: 'app-shop-item-form',
  templateUrl: './shop-item-form.page.html',
  styleUrls: ['./shop-item-form.page.scss'],
})
export class ShopItemFormPage implements OnInit {

  item: ShopItem = {
    ItemId: null,
    ItemBarcode: '',
    ItemName: '',
    ItemManufacturer: '',
    ItemPrice: 0.00,
    ItemScanned: true
  };
  itemBarcode: string;

  public formData: FormGroup;

  constructor(private shopItemsService: ShopItemsService, private router: Router, private route: ActivatedRoute, public formBuilder: FormBuilder) {
    this.itemBarcode = this.route.snapshot.paramMap.get('itembarcode').toString();
    this.item.ItemBarcode = this.itemBarcode;
    this.formData = this.formBuilder.group({
      _itemBarcode: new FormControl(this.itemBarcode, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      _itemName: new FormControl(this.item.ItemName, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      _itemManufacturer: new FormControl(this.item.ItemManufacturer, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
      _itemPrice: new FormControl(this.item.ItemPrice, [Validators.required, Validators.max(1000000), Validators.min(0)])
    })
  }

  ngOnInit() {
  }

  getAllShopItems() {
    this.shopItemsService.getShopItems().subscribe((data: ShopItem[]) => {
      this.shopItemsService.items = data;
      this.sum();
    })
  }

  onSubmit() {
    if(this.item.ItemBarcode === '' || this.item.ItemName === '' || this.item.ItemManufacturer === '' || this.item.ItemPrice <= 0)
      alert("Potrzebne więcej informacji");
    else {
      this.addItem(this.item);
      this.sum();
      this.btnGoBack();
    }
  }

  addItem(item: ShopItem) {
    this.shopItemsService.postShopItem(item).subscribe(response => {
      this.getAllShopItems();
      this.sum();
    });
  }

  sum() {
    this.shopItemsService.summary = 0;
    this.shopItemsService.items.forEach(element => {
      if(element.ItemScanned)
        this.shopItemsService.summary += element.ItemPrice;
    })
  }

  btnGoBack() {
    this.router.navigateByUrl('/tabs/tab1');
  }

}

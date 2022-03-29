import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  public itemsToBuy: {type: string, name: string, description: string, count: number}[] = [
    {type: 'drink', name: 'Coca Cola', description: 'Napój w butelce', count: 3},
    {type: 'fastfood', name: 'Pizza Hawajska', description: 'Fast Food', count: 4}
  ];

  public itemsBought: {type: string, name: string, description: string, count: number}[] = [];

  iBlen = this.itemsBought.length;
  iTBlen = this.itemsToBuy.length;

  itemBought(type: string, name: string, description: string, count: number) {
    this.itemsBought.push({type, name, description, count});
    this.deleteItemToBuy(name);
  }

  deleteItemBought(name: string) {
    this.itemsBought.forEach((value,index)=>{
      if(value.name==name) this.itemsBought.splice(index,1);
    })
  }

  deleteItemToBuy(name: string) {
    this.itemsToBuy.forEach((value,index)=>{
      if(value.name==name) this.itemsToBuy.splice(index,1);
    })
  }

  buyAgain(type: string, name: string, description: string, count: number) {
    this.itemsToBuy.push({type, name, description, count});
    this.deleteItemToBuy(name);
  }
}

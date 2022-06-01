using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Threading.Tasks;
using virtual_cart_web_api.DataAccess;
using System.Data.Entity;
using virtual_cart_web_api.Models;

namespace virtual_cart_web_api.Migrations
{/*
    internal sealed class Configuration : DbMigrationsConfiguration<VirtualCartDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(VirtualCartDBContext context)
        {
            var shopItems = new List<ShopItem>
            {
                new ShopItem { ItemId = 1, ItemBarcode = "5449000000286", ItemName = "Coca Cola 0.5l", ItemManufacturer = "Coca Cola", ItemPrice = 4.99, ItemScanned = true },
                new ShopItem { ItemId = 2, ItemBarcode = "7622300498085", ItemName = "Oreo", ItemManufacturer = "Mondelez International", ItemPrice = 5.99, ItemScanned = true }
            };

            shopItems.ForEach(i => context.ShopItems.AddOrUpdate(x => x.ItemId, i));
        }
    } */
}

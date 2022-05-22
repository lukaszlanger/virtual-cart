using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using virtual_cart_web_api.Models;

namespace virtual_cart_web_api.DataAccess
{
    public class VirtualCartContext : DbContext
    {
        public VirtualCartContext(DbContextOptions options) : base(options) { }
        public DbSet<ShopItem> ShopItems { get; set; }
        public DbSet<ShoppingListItem> ShoppingListItems { get; set; }
    }
}

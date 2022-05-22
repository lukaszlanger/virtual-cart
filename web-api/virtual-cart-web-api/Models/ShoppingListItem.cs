using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace virtual_cart_web_api.Models
{
    public class ShoppingListItem
    {
        [Key]
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public int ItemQuantity { get; set; }
        public bool ItemBought { get; set; }
    }
}

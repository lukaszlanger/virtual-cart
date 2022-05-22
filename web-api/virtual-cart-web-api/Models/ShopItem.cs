using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace virtual_cart_web_api.Models
{
    public class ShopItem
    {
        [Key]
        public int ItemId { get; set; }
        public string ItemBarcode { get; set; }
        public string ItemName { get; set; }
        public string ItemManufacturer { get; set; }
        public double ItemPrice { get; set; }
        public bool ItemScanned { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using virtual_cart_web_api.DataAccess;
using virtual_cart_web_api.Models;

namespace virtual_cart_web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoppingListItemsController : ControllerBase
    {
        private readonly VirtualCartContext _context;

        public ShoppingListItemsController(VirtualCartContext context)
        {
            _context = context;
        }

        // GET: api/ShoppingListItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShoppingListItem>>> GetShoppingListItems()
        {
            return await _context.ShoppingListItems.ToListAsync();
        }

        // GET: api/ShoppingListItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShoppingListItem>> GetShoppingListItem(int id)
        {
            var shoppingListItem = await _context.ShoppingListItems.FindAsync(id);

            if (shoppingListItem == null)
            {
                return NotFound();
            }

            return shoppingListItem;
        }

        // PUT: api/ShoppingListItems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShoppingListItem(int id, ShoppingListItem shoppingListItem)
        {
            if (id != shoppingListItem.ItemId)
            {
                return BadRequest();
            }

            _context.Entry(shoppingListItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShoppingListItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ShoppingListItems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ShoppingListItem>> PostShoppingListItem(ShoppingListItem shoppingListItem)
        {
            _context.ShoppingListItems.Add(shoppingListItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetShoppingListItem", new { id = shoppingListItem.ItemId }, shoppingListItem);
        }

        // DELETE: api/ShoppingListItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShoppingListItem(int id)
        {
            var shoppingListItem = await _context.ShoppingListItems.FindAsync(id);
            if (shoppingListItem == null)
            {
                return NotFound();
            }

            _context.ShoppingListItems.Remove(shoppingListItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ShoppingListItemExists(int id)
        {
            return _context.ShoppingListItems.Any(e => e.ItemId == id);
        }
    }
}

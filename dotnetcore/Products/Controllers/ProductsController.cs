using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProductsApp.Helpers;
using ProductsApp.Models;

namespace ProductsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public static List<Product> Products = InitializeProductList.Initialize();
        public static int LastID = 6;



        // GET api/products
        [HttpGet]
        public ActionResult<List<Product>> Get()
        {
            return Ok(Products);
        }

        // GET api/products/5
        [HttpGet("{id}")]
        public ActionResult<Product> Get(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound();
            return Ok(product);

        }

        // POST api/products
        [HttpPost]
        public ActionResult<Product> Post([FromBody] Product product)
        {
            if (Products.Exists(p => p.Name.ToLower() == product.Name.ToLower()))
                return BadRequest("A product with that name already exists. Product names must be unique");
            Products.Add(product);
            LastID++;
            product.Id = LastID;
            return CreatedAtAction(nameof(Get), new { id = product.Id }, product);
        }

        // PUT api/products/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Product product)
        {
            var existingProduct = Products.FirstOrDefault(p => p.Id == id);
            if (existingProduct != null)
                existingProduct.Name = product.Name;
            existingProduct.Description = product.Description;
            existingProduct.Quantity = product.Quantity;

        }

        // DELETE api/products/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Products.Remove(Products.Single(p => p.Id == id));
        }
    }
}

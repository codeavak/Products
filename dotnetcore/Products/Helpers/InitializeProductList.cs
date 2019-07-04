using ProductsApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductsApp.Helpers
{
    public static class InitializeProductList
    {
        public static List<Product> Initialize()
        {
            var Products = new List<Product>();
            Products.Add(new Product
            {
                Id = 0,
                Name = "Racket",
                Description = "Racket is a sports implement consisting of a handled frame with an open hoop across which a network of strings or catgut is stretched tightly.",
                Quantity = 20
            });

            Products.Add(new Product
            {
                Id = 1,
                Name = "Hockey Puck",
                Description = "A hockey puck is a disk made of vulcanized rubber that serves the same functions in various games.",
                Quantity = 10
            });

            Products.Add(new Product
            {
                Id = 2,
                Name = "Flying Discs",
                Description = "Are used recreationally and competitively for throwing and catching.",
                Quantity = 40
            });

            Products.Add(new Product
            {
                Id = 3,
                Name = "Football",
                Description = "A football, soccer ball, or association football ball is the ball used in the sport of association football.",
                Quantity = 2
            });


            Products.Add(new Product
            {
                Id = 4,
                Name = "Balance Board",
                Description = "Device used as a circus skill, for recreation, balance training, athletic training, brain development, therapy, musical training and other kinds of personal development.",
                Quantity = 3
            });

            Products.Add(new Product
            {
                Id = 5,
                Name = "Gloves",
                Description = "Is a garment covering the whole hand. Gloves usually have separate sheaths or openings for each finger and the thumb.",
                Quantity = 52
            });


            Products.Add(new Product
            {
                Id = 6,
                Name = "Jump Ropes",
                Description = "Are tools used in the sport of skipping/jump rope where one or more participants jump over a rope swung so that it passes under their feet and over their heads.",
                Quantity = 23
            });
            return Products;
        }

    }
}

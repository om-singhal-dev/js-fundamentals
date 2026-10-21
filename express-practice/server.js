const express = require("express");
const app = express();

const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 600 },
  { name: "Cable", price: 200 },
  { name: "Pen drive", price: 450 }
];

app.get("/api/products", function(req, res){
    const maxPrice = req.query.maxPrice;

    if(maxPrice){
        const result = products.filter(function(product) {
        return product.price <= Number(maxPrice);
        });
        res.json(result);
    } else {
        res.json(products);
    }
})

app.get("/", function(req, res) {
  res.send("Hello from my server");
});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
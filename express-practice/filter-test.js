const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 600 },
  { name: "Cable", price: 200 },
  { name: "Pen drive", price: 450 }
];

const maxPrice = "500";

const result = products.filter(function(product) {
  return product.price <= Number(maxPrice);
});

console.log(result);
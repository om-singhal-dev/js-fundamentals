const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 600 },
  { name: "Cable", price: 200 },
  { name: "Pen drive", price: 450 }
];

const cheap = products.filter(function(product){
    return product.price < 1000;
});
console.log(cheap);

const cheapNames = products.filter(product => product.price < 1000).map(product => product.name);

console.log(cheapNames);

const names = products.map(function(product){
    return product.name;
})

console.log(names);

const total = products.reduce(function(total, product){
    return total + product.price;
}, 0);

console.log(total);
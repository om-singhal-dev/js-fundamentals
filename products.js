const products = [
  { name: "Keyboard", price: 1500 },
  { name: "Mouse", price: 600 },
  { name: "Cable", price: 200 },
  { name: "Pen drive", price: 450 }
];

const phrase = products.map(function({name , price}){
  return `${name} costs ${price}`;
});

console.log(phrase);

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

let count = 0;

function addOne() {
  count = count + 1;
  return count;
}

console.log(addOne());
console.log(addOne());
console.log(count);

function makeCounter(count) {
  return function() {
    count = count + 1;
    return count;
  };
}

const counterA = makeCounter(10);
const counterB = makeCounter(100);

console.log(counterA());
console.log(counterA());
console.log(counterB());
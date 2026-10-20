const cart = [{ name: "Pen", qty: 1 }, { name: "Book", qty: 2 }];
const newItem = { name: "Bag", qty: 1 };

const cart2 = [...cart, newItem];
const first = { ...cart[0], qty: 5 };

console.log(cart.length);
console.log(cart2.length);
console.log(first);
console.log(cart[0]);
const nums = [1, 2, 3, 4, 5, 6];

const evenSquare = nums.filter(num => num%2===0).map(num => num*num);

const sum = evenSquare.reduce(function(total, num){
    return total + num;
}, 0);

console.log(sum);

const product = { title: "Mouse", price: 600, stock: 12 };

const { title , price} = product;

console.log(title, "costs" , price);
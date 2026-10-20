// Async basics: setTimeout, promises, async/await, fetch, try/catch

console.log("A");

setTimeout(function() {
  console.log("B");
}, 1000);

console.log("C");

console.log("1");

setTimeout(function() {
  console.log("2");
}, 0);

console.log("3");

const wait = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("data ready");
  }, 1000);
});

console.log("start");

wait.then(function(result) {
  console.log(result);
});

console.log("end");

const wait1 = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("pizza");
  }, 1000);
});

async function eat() {
  const food = await wait1;
  console.log(food);
}

eat();
console.log("ordered");

async function getTodo() {
  try{
    const response = await fetch("https://jjjsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.log("Something went wrong");
  }
}

getTodo();
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
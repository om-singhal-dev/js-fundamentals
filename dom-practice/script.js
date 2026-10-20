const countDisplay = document.getElementById("count");
const add = document.getElementById("add");   
const reset = document.getElementById("reset");
const nameInput = document.getElementById("name");
const greet = document.getElementById("greet");
const message = document.getElementById("message");

let count = 0;

add.addEventListener("click", function() {      // when it's clicked, run this function
  count += 1;
  countDisplay.textContent = count;
});

reset.addEventListener("click", function(){
    count = 0;
    countDisplay.textContent = count;
})

greet.addEventListener("click", function(){
    message.textContent = `Hello, ${nameInput.value}`;
})


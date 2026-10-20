const countDisplay = document.getElementById("count");
const title = document.getElementById("add");   // find the element with id="count"
let count = 0;

title.addEventListener("click", function() {      // when it's clicked, run this function
  count += 1;
  countDisplay.textContent = count;
});
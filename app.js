//querySelector selects just one item; use nth-child to select the specific item
wrap = document.querySelector("#book-list li:nth-child(3) .name");
// console.log(wrap);

// wrapper = document.querySelector("#book-list li .name");

//querySelectorAll selects multiple items
wrapper = document.querySelectorAll("#book-list li .name");
// console.log(wrapper);

//using forEach to cycle through the array
Array.from(wrapper).forEach(function(title){
console.log(title);
});
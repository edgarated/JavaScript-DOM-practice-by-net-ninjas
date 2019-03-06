
let book = document.querySelector("#book-list");

console.log(book.nextSibling)
console.log(book.nextElementSibling);
console.log(book.previousSibling)
console.log(book.previousElementSibling);

//To change the element in the node
 console.log(book.previousElementSibling.querySelector("p").innerHTML += " <br/> Hello, world");


 

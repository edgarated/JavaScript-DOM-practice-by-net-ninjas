let books = document.querySelectorAll("#book-list li .name");
// console.log(names);

books.forEach(function(book){
// book.textContent
//to append an item to the textContent
book.textContent += " : (book title)"


});


let books = document.querySelector("#book-list");
books.innerHTML = "<h1>Hello</h1>";
//to append an item to the innerHTML
books.innerHTML += "<p>let's do this for the culture</p>"


//To get the parent nodes
const bookList = document.querySelector("#book-list");
console.log(bookList.parentElement);
//still works for parent nodes
console.log(bookList.parentNode);

//To go further up
console.log(bookList.parentElement.parentElement);

//To get the child nodes;
console.log(bookList.children);


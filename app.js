//when h2 tag is clicked it displays the properties
let h2 = document.querySelector("#book-list h2");
h2.addEventListener("click", function(e){
console.log(e.target);
console.log(e);


})



//This event listener deletes  an item when the delete button is clicked
const btns = document.querySelectorAll("#book-list .delete");
btns.forEach(function(btn){
btn.addEventListener("click" , function(e){

const li = e.target.parentElement;
  seebtns = li.parentElement.removeChild(li)
  console.log(seebtns);

});

});

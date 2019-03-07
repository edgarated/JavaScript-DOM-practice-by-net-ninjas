//Delete a button
const list = document.querySelectorAll("#book-list ul");
list.forEach(function(lists){

  lists.addEventListener("click", function(e){

   if(e.target.className == "delete"){
   const li = e.target.parentElement;
   li.parentElement.removeChild(li);

   }

  })


})

//to prevent a default action
const link = document.querySelector("#page-banner a");
link.addEventListener("click" , function(e){
e.preventDefault();


})
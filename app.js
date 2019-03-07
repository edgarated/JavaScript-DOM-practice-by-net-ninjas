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


//Add book list
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e){
 
//    //prevents the default action
  e.preventDefault();
const value = addForm.querySelector('input[type="text"]').value;
console.log(value);
})



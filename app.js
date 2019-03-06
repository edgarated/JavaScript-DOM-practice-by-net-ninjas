//using forEach loop to cycle through the className
let names = document.getElementsByClassName("name");
//convert the html collection into an array
Array.from(names).forEach(function(title){
console.log(title);

});

//PRINTS
//  <span class=​"name">​Name of the Wind​</span>​
//  <span class=​"name">​The Wise Man's Fear​</span>​
//  <span class=​"name">​Kafka on the Shore​</span>​
//  <span class=​"name">​The Master and the Margarita​</span>​
//  <span class=​"name">​Blink!​</span>​

//using for loop to cycle through the className
for(let i = 0; i < names.length; i++){
  console.log(names[i]);
}
//PRINTS
//  <span class=​"name">​Name of the Wind​</span>​
//  <span class=​"name">​The Wise Man's Fear​</span>​
//  <span class=​"name">​Kafka on the Shore​</span>​
//  <span class=​"name">​The Master and the Margarita​</span>​
//  <span class=​"name">​Blink!​</span>​

//GET ELEMENT BY TAG NAME
let titles = document.getElementsByTagName("li");
console.log(titles);
// PRINTS
// HTMLCollection(5) [li, li, li, li, li]
// 0: li
// 1: li
// 2: li
// 3: li
// 4: li
// length: 5

let title= document.getElementsByTagName("li");
console.log(title[2]);
//PRINTS
// {<li>
// 	<span class="name">Kafka on the Shore</span>
// 	<span class="delete">delete</span>
// 	</li> }
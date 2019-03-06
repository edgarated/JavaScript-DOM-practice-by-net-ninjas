const banner = document.querySelector("#page-banner");

//TO find out the type of the node
console.log("#page-banner node type is : ", banner.nodeType);

//To find out the name of the node
console.log("#page-banner node type is : ",banner.nodeName);

//To know if the know has a child
console.log("#page-banner node type is : ",banner.hasChildNodes());

//To clone a node : "true" goes deep to show the contents of the node
const bannerClone = banner.cloneNode(true);
console.log(bannerClone);




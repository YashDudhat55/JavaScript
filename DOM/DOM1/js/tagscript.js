const h1 = document.getElementsByTagName("h1");

let h1List = Array.from(h1);

h1List.forEach((element, index) => {

element.style.cssText =`background-color:yellow;padding:10px;border-radius:10px;display:inline-block;color:red;border:2px solid red;margin:10px;`;

console.log(index, element.innerText);

});
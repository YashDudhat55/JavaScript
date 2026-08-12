const heading = document.querySelector("#title");

console.log(heading.className);

heading.style.backgroundColor = 'black';
heading.style.color = 'white';
heading.style.padding = '20px';
heading.style.borderRadius = '8px';
heading.style.border = '1px solid pink';


const paragraph = document.querySelectorAll("p");

console.log(paragraph);

paragraph[0].style.backgroundColor = '#020202';
paragraph[0].style.color = '#f7f8f7';
paragraph[0].style.padding = '20px';
paragraph[0].style.width = '70%';
paragraph[0].style.margin = '20px auto';
paragraph[0].style.fontWeight = '600';
paragraph[0].style.border = '2px solid #005a00';
paragraph[0].style.borderRadius = '10px';
// console.log("Document Object Model (DOM)");

// console.log(document);

// const heading = document.getElementById("heading");

// console.log("ID : ", heading.id);
// console.log("CLASS : ", heading.className);
// console.log("Align : ", heading.align);

// console.log("Get Attributes : ", heading.getAttribute('id'));

// heading.setAttribute('class', `${heading.className} myHeading`);
// Get Element By ID
const title = document.getElementById("title");

// Print Complete Element
console.log(title);

// Get ID
console.log("ID :", title.id);

// Get Class
console.log("Class :", title.className);

// Get Attribute
console.log("Name Attribute :", title.getAttribute("name"));

// Set Attribute
title.setAttribute("class", `${title.className} myTitle`);
title.setAttribute("name", "second");

// -------------------------
// Style Properties
// -------------------------

// title.style.color = "blue";
// title.style.backgroundColor = "brown";
// title.style.borderRadius = "50px";

// Multiple CSS Properties
title.style.cssText = `
color: yellow;
background-color: red;
text-align: center;
padding: 10px;
border-radius: 20px;
font-family: Arial;
`;

// -------------------------
// Text Properties
// -------------------------

console.log("textContent :", title.textContent);

console.log("innerText :", title.innerText);

console.log("innerHTML :", title.innerHTML);

// -------------------------
// Change Text
// -------------------------

// title.textContent = `${title.textContent} Jaynesh Sarkar`;

// title.innerText = "DOM";

// Change HTML
title.innerHTML = `
<h2>Yash Dudhat</h2>

<img src="https://picsum.photos/250/150" alt="Random Image">
`;
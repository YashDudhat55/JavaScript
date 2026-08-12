let heading = document.getElementsByClassName("heading");

console.log(heading);

if (heading.length > 0) {

    console.log("ID :", heading[0].id);

    console.log("CLASS :", heading[0].className);

    console.log("CLASS LIST :", heading[0].classList);
}

// Add New Class
heading[0].classList.add("btn");

// Remove Class
// heading[0].classList.remove("title");

// Print Text
console.log(heading[0].textContent);
console.log(heading[0].innerText);
console.log(heading[0].innerHTML);

// Change Text
heading[0].innerText = "Jaynesh Sarkar";

// Apply CSS
heading[0].style.cssText =`
color:brown;
background-color:yellow;padding:10px;border-radius:10px;text-align:center;`;

heading[1].style.cssText =
`
color:brown;
background-color:yellow;
height:150px;
width:150px;
padding:10px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
`;
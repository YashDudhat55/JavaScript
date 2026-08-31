//Click Event

document.getElementById("myButton").addEventListener("click", () => {
    alert("Button was clicked!");
});

//Double Click Event

document.getElementById("doubleClickButton").addEventListener("dblclick", () => {
    alert("Button was double-clicked!");
});

document.getElementById('increment').addEventListener('click', () => {
    const count = document.querySelector("#count");

    let num = Number(count.innerText); // num = 1

    if (num < 20) {
        count.innerText = num + 1;
    }
});


document.getElementById('decrement').addEventListener('click', () => {
    const count = document.querySelector("#count");

    // let num = Number(count.innerText); // num = 1

    if (Number(count.innerText) > 1) {

        count.innerText = Number(count.innerText) - 1;
    }
});


const box = document.getElementById('box');


box.addEventListener('mouseout', () => {
    document.querySelector('.counter').style.scale = '1';
});
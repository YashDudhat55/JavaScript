const model = document.getElementById('model');
const closeBtn = document.getElementById('closeBtn');

setTimeout(() => {
    model.style.opacity = '1';
}, 5000);

closeBtn.addEventListener('click', () => {
    model.style.opacity = '0';
});
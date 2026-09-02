// document.getElementById('add-btn').addEventListener('click', () => {
//     localStorage.setItem('name', 'Yash Dudhat');
// });

// document.getElementById('update-btn').addEventListener('click', () => {
//     localStorage.setItem('name', 'Yash Dudhat Updated');
// });

// document.getElementById('delete-btn').addEventListener('click', () => {
//     localStorage.removeItem('name');
// });

document.getElementById('add-btn').addEventListener('click', () => {


    products = [{
        name: 'iPhone 17 Pro Max',
        price: 20000000,
        Storage: ['1TB', '512GB', '256GB', '128GB'],
        color: ['Black', 'White', 'Blue', 'Green', 'Red'],
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTsg-LQTzuYz61NoC5dgbnjMDiQoBoU5J6HIJDj7MIHUFvV_GlBXv-goSUHPuzRdB0HiG-IKZyJaO5ZyXJuDWc2STxVimZyNhcStawaFURU5X3psuVpLntD-T4OJnWbvX_uek-rsyE_&usqp=CAc',
    },];

    localStorage.setItem('products', JSON.stringify(products));

    const getProducts = JSON.parse(localStorage.getItem('products'));
    console.log(getProducts);
});
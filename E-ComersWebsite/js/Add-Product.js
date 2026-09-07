const productForm = document.getElementById('productForm');

productForm.addEventListener('submit', (e) => {

    e.preventDefault();

    document.querySelectorAll('input, textarea, select').forEach(input => {

        input.classList.remove('border-danger');

    });

    document.querySelectorAll('.error').forEach(span => {

        span.innerText = "";

    });


    const productName = document.getElementById('ProductName');
    const category = document.getElementById('Category');
    const price = document.getElementById('Price');
    const quantity = document.getElementById('Quantity');
    const brand = document.getElementById('Brand');
    const image = document.getElementById('Image');
    const productDescription = document.getElementById('ProductDescription');

    const colors = document.querySelectorAll('input[name="colors"]:checked');

    let isValid = true;


    // Product Name

    if (productName.value === "") {

        productName.classList.add('border-danger');

        document.querySelector('#productNameError').innerText =
            "* Please enter product name...";

        isValid = false;
    }


    // Category

    if (category.value === "") {

        category.classList.add('border-danger');

        document.querySelector('#categoryError').innerText =
            "* Please enter product category...";

        isValid = false;
    }


    // Price

    if (price.value === "") {

        price.classList.add('border-danger');

        document.querySelector('#priceError').innerText =
            "* Please enter product price...";

        isValid = false;
    }


    // Quantity

    if (quantity.value === "") {

        quantity.classList.add('border-danger');

        document.querySelector('#quantityError').innerText =
            "* Please enter product quantity...";

        isValid = false;
    }


    // Brand

    if (brand.value === "") {

        brand.classList.add('border-danger');

        document.querySelector('#brandError').innerText =
            "* Please enter product brand...";

        isValid = false;
    }


    // Image

    if (image.value === "") {

        image.classList.add('border-danger');

        document.querySelector('#imageError').innerText =
            "* Please select product image...";

        isValid = false;
    }


    // Product Description

    if (productDescription.value === "") {

        productDescription.classList.add('border-danger');

        document.querySelector('#productDescriptionError').innerText =
            "* Please enter product description...";

        isValid = false;
    }


    // Colors

    if (colors.length === 0) {

        document.querySelector('#colorError').innerText =
            "* Please select product color...";

        isValid = false;
    }


    if (isValid) {

        console.log("Form Submitted...");

    }

    // Local Storage

    if (isValid) {

        const product = {
            productName: productName.value.trim(),
            category: category.value.trim(),
            price: price.value,
            quantity: quantity.value,
            brand: brand.value.trim(),
            productImage: image.value.trim(),
            description: productDescription.value.trim(),
            colors: [...colors].filter(color => color.checked).map(color => color.value)
        };

        let allProducts = JSON.parse(localStorage.getItem("products")) || [];

        allProducts.push(product);

        localStorage.setItem("products", JSON.stringify(allProducts));

        alert("Product added successfully!");

        console.log("Product added:", product);

        productForm.reset();
    }


});





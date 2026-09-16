const productForm = document.getElementById("productForm");

const productName = document.getElementById("ProductName");
const category = document.getElementById("Category");
const price = document.getElementById("Price");
const quantity = document.getElementById("Quantity");
const brand = document.getElementById("Brand");
const productImage = document.getElementById("Image");
const description = document.getElementById("ProductDescription");

const colors = document.querySelectorAll('input[name="colors"]');


// Get product index

const urlParams = new URLSearchParams(window.location.search);

const productIndex = urlParams.get("edit");


// Get products

let allProducts =
    JSON.parse(localStorage.getItem("products")) || [];


// Check product

if (
    productIndex === null ||
    !allProducts[productIndex]
) {

    Toastify({
        text: "✕ Product not found!",
        duration: 2000,
        gravity: "top",
        position: "right"
    }).showToast();

    setTimeout(() => {

        window.location.href = "View-Products.html";

    }, 2000);

}


// Get old product

const oldProduct = allProducts[productIndex];


// Show old product data

productName.value = oldProduct.productName || "";

category.value = oldProduct.category || "";

price.value = oldProduct.price || "";

quantity.value = oldProduct.quantity || "";

brand.value = oldProduct.brand || "";

productImage.value = oldProduct.productImage || "";

description.value = oldProduct.description || "";


// Select old colors

colors.forEach((color) => {

    if (
        oldProduct.colors &&
        oldProduct.colors.includes(color.value)
    ) {

        color.checked = true;

    }

});


// Update Product

productForm.addEventListener("submit", (e) => {

    e.preventDefault();


    // Remove old errors

    document.querySelectorAll(
        "input, textarea, select"
    ).forEach((input) => {

        input.classList.remove("border-danger");

    });


    document.querySelectorAll(".error").forEach((span) => {

        span.innerText = "";

    });


    let isValid = true;


    // Product Name

    if (productName.value.trim() === "") {

        productName.classList.add("border-danger");

        document.getElementById("productNameError").innerText =
            "Product name is required";

        isValid = false;

    }


    // Category

    if (category.value.trim() === "") {

        category.classList.add("border-danger");

        document.getElementById("categoryError").innerText =
            "Category is required";

        isValid = false;

    }


    // Price

    if (
        price.value === "" ||
        Number(price.value) <= 0
    ) {

        price.classList.add("border-danger");

        document.getElementById("priceError").innerText =
            "Enter valid price";

        isValid = false;

    }


    // Quantity

    if (
        quantity.value === "" ||
        Number(quantity.value) <= 0
    ) {

        quantity.classList.add("border-danger");

        document.getElementById("quantityError").innerText =
            "Enter valid quantity";

        isValid = false;

    }


    // Brand

    if (brand.value.trim() === "") {

        brand.classList.add("border-danger");

        document.getElementById("brandError").innerText =
            "Brand is required";

        isValid = false;

    }


    // Image

    if (productImage.value.trim() === "") {

        productImage.classList.add("border-danger");

        document.getElementById("imageError").innerText =
            "Image link is required";

        isValid = false;

    }


    // Description

    if (description.value.trim() === "") {

        description.classList.add("border-danger");

        document.getElementById("descriptionError").innerText =
            "Description is required";

        isValid = false;

    }


    // Colors

    const selectedColors =
        [...colors]
            .filter(color => color.checked)
            .map(color => color.value);


    if (selectedColors.length === 0) {

        document.getElementById("colorError").innerText =
            "Please select at least one color";

        isValid = false;

    }


    // Update Product

    if (isValid) {

        const updatedProduct = {

            id: oldProduct.id,

            productName: productName.value.trim(),

            category: category.value.trim(),

            price: price.value,

            quantity: quantity.value,

            brand: brand.value.trim(),

            productImage: productImage.value.trim(),

            description: description.value.trim(),

            colors: selectedColors

        };


        allProducts[productIndex] = updatedProduct;


        localStorage.setItem(
            "products",
            JSON.stringify(allProducts)
        );


        Toastify({

            text: "✓ Product updated successfully!",

            duration: 2000,

            gravity: "top",

            position: "right"

        }).showToast();


        setTimeout(() => {

            window.location.href = "View-Products.html";

        }, 2000);

    }

});
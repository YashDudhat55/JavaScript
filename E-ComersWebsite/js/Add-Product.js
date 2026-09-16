const productForm = document.getElementById("productForm");

const urlParams = new URLSearchParams(window.location.search);
const editIndex = urlParams.get("edit");

let allProducts =
    JSON.parse(localStorage.getItem("products")) || [];

const isEditMode =
    editIndex !== null &&
    editIndex !== "" &&
    !isNaN(editIndex) &&
    allProducts[Number(editIndex)] !== undefined;


// EDIT MODE

if (isEditMode) {

    const product =
        allProducts[Number(editIndex)];

    document.querySelector("h1").innerText =
        "Edit Product";

    document.querySelector(".add-btn").innerText =
        "Update Product";


    document.getElementById("ProductName").value =
        product.productName || "";

    document.getElementById("Category").value =
        product.category || "";

    document.getElementById("Price").value =
        product.price || "";

    document.getElementById("Quantity").value =
        product.quantity || "";

    document.getElementById("Brand").value =
        product.brand || "";

    document.getElementById("Image").value =
        product.productImage || "";

    document.getElementById("ProductDescription").value =
        product.description || "";


    // Colors

    document.querySelectorAll('input[name="colors"]')
        .forEach((input) => {

            input.checked =
                product.colors &&
                product.colors.includes(input.value);

        });

}


// FORM SUBMIT

productForm.addEventListener("submit", (e) => {

    e.preventDefault();


    // Remove old errors

    document.querySelectorAll("input, textarea, select")
        .forEach((input) => {

            input.classList.remove("border-danger");

        });


    document.querySelectorAll(".error")
        .forEach((error) => {

            error.innerText = "";

        });


    // Get elements

    const productName =
        document.getElementById("ProductName");

    const category =
        document.getElementById("Category");

    const price =
        document.getElementById("Price");

    const quantity =
        document.getElementById("Quantity");

    const brand =
        document.getElementById("Brand");

    const image =
        document.getElementById("Image");

    const productDescription =
        document.getElementById("ProductDescription");


    const selectedColors =
        document.querySelectorAll(
            'input[name="colors"]:checked'
        );


    let isValid = true;


    // Product Name

    if (productName.value.trim() === "") {

        productName.classList.add("border-danger");

        document.getElementById(
            "productNameError"
        ).innerText =
            "* Please enter product name";

        isValid = false;

    }

    else if (productName.value.trim().length < 3) {

        productName.classList.add("border-danger");

        document.getElementById(
            "productNameError"
        ).innerText =
            "* Product name must be at least 3 characters";

        isValid = false;

    }


    // Category

    if (category.value.trim() === "") {

        category.classList.add("border-danger");

        document.getElementById(
            "categoryError"
        ).innerText =
            "* Please enter category";

        isValid = false;

    }


    // Price

    if (price.value === "") {

        price.classList.add("border-danger");

        document.getElementById(
            "priceError"
        ).innerText =
            "* Please enter product price";

        isValid = false;

    }

    else if (Number(price.value) <= 0) {

        price.classList.add("border-danger");

        document.getElementById(
            "priceError"
        ).innerText =
            "* Price must be greater than 0";

        isValid = false;

    }


    // Quantity

    if (quantity.value === "") {

        quantity.classList.add("border-danger");

        document.getElementById(
            "quantityError"
        ).innerText =
            "* Please enter product quantity";

        isValid = false;

    }

    else if (Number(quantity.value) <= 0) {

        quantity.classList.add("border-danger");

        document.getElementById(
            "quantityError"
        ).innerText =
            "* Quantity must be greater than 0";

        isValid = false;

    }


    // Brand

    if (brand.value.trim() === "") {

        brand.classList.add("border-danger");

        document.getElementById(
            "brandError"
        ).innerText =
            "* Please enter brand name";

        isValid = false;

    }

    else if (brand.value.trim().length < 2) {

        brand.classList.add("border-danger");

        document.getElementById(
            "brandError"
        ).innerText =
            "* Brand name must be at least 2 characters";

        isValid = false;

    }


    // Image

    if (image.value.trim() === "") {

        image.classList.add("border-danger");

        document.getElementById(
            "imageError"
        ).innerText =
            "* Please enter image URL";

        isValid = false;

    }


    // Description

    if (productDescription.value.trim() === "") {

        productDescription.classList.add("border-danger");

        document.getElementById(
            "productDescriptionError"
        ).innerText =
            "* Please write product description";

        isValid = false;

    }

    else if (productDescription.value.trim().length < 10) {

        productDescription.classList.add("border-danger");

        document.getElementById(
            "productDescriptionError"
        ).innerText =
            "* Description must be at least 10 characters";

        isValid = false;

    }


    // Colors

    if (selectedColors.length === 0) {

        document.getElementById(
            "colorError"
        ).innerText =
            "* Please select at least one color";

        isValid = false;

    }


    // Stop if invalid

    if (!isValid) {

        return;

    }


    // Product Object

    const product = {

        id: isEditMode
            ? allProducts[Number(editIndex)].id
            : Math.floor(Math.random() * 999999) + 10000,

        productName:
            productName.value.trim(),

        category:
            category.value.trim(),

        price:
            price.value,

        quantity:
            quantity.value,

        brand:
            brand.value.trim(),

        productImage:
            image.value.trim(),

        description:
            productDescription.value.trim(),

        colors:
            [...selectedColors].map(
                (color) => color.value
            )

    };


    // EDIT PRODUCT

    if (isEditMode) {

        allProducts[Number(editIndex)] =
            product;

        localStorage.setItem(
            "products",
            JSON.stringify(allProducts)
        );


        Toastify({

            text:
                "✓ Product updated successfully!",

            duration: 4000,

            close: true,

            gravity: "top",

            position: "right",

            stopOnFocus: true,

            style: {

                background:
                    "linear-gradient(135deg, rgba(24, 82, 60, 0.82), rgba(47, 125, 91, 0.68))",

                color: "#ffffff",

                padding: "18px 25px",

                fontSize: "15px",

                fontWeight: "600",

                borderRadius: "18px"

            }

        }).showToast();


        setTimeout(() => {

            window.location.href =
                "View-Products.html";

        }, 1000);

    }


    // ADD PRODUCT

    else {

        allProducts.push(product);

        localStorage.setItem(
            "products",
            JSON.stringify(allProducts)
        );


        Toastify({

            text:
                "✓ Product added successfully!",

            duration: 4000,

            close: true,

            gravity: "top",

            position: "right",

            stopOnFocus: true,

            style: {

                background:
                    "linear-gradient(135deg, rgba(24, 82, 60, 0.82), rgba(47, 125, 91, 0.68))",

                color: "#ffffff",

                padding: "18px 25px",

                fontSize: "15px",

                fontWeight: "600",

                borderRadius: "18px"

            }

        }).showToast();


        productForm.reset();

    }

});
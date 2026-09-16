let AllProducts = JSON.parse(localStorage.getItem("products")) || [];

const DisplayProducts = document.getElementById("displayProducts");
const homeProductSearch = document.getElementById("homeProductSearch");
const navbarSearch = document.getElementById("navbarSearch");
const categoryFilters = document.getElementById("categoryFilters");
const homeEmptyProducts = document.getElementById("homeEmptyProducts");

// DISPLAY PRODUCTS

function displayProducts(products = AllProducts) {

DisplayProducts.innerHTML = "";

if (products.length === 0) {

    homeEmptyProducts.style.display = "flex";

    return;
}

homeEmptyProducts.style.display = "none";

products.forEach((product) => {

    const originalIndex = AllProducts.indexOf(product);

    const statusClass =
        product.status === "Available"
            ? "available"
            : "out-stock";

    DisplayProducts.innerHTML += `

        <div class="col-xl-3 col-lg-4 col-md-6">

            <div class="card h-100"
                onclick="openProduct(${originalIndex})">

                <div class="p-3 text-center">

                    <img
                        src="${product.productImage}"
                        alt="${product.productName}"
                        class="img-fluid"
                        style="height:200px; object-fit:contain;"
                    >

                    <div class="mt-2">

                        <span class="badge bg-dark">
                            ${product.category}
                        </span>

                    </div>

                </div>


                <div class="card-body">

                    <small>
                        ${product.brand}
                    </small>

                    <h4 class="fs-5 mb-0 text-truncate">
                        ${product.productName}
                    </h4>


                    <div class="d-flex justify-content-between">

                        <div>
                            <br>

                            <strong>
                                ₹${Number(product.price).toLocaleString("en-IN")}
                            </strong>

                        </div>


                        <div>

                            ${(product.colors || [])
                                .slice(0, 4)
                                .map(
                                    (color) => `
                                        <span
                                            style="
                                                display:inline-block;
                                                width:15px;
                                                height:15px;
                                                border-radius:50%;
                                                background:${color};
                                                margin:2px;
                                            ">
                                        </span>
                                    `
                                )
                                .join("")}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;

});


}

// OPEN PRODUCT

function openProduct(index) {

localStorage.setItem("selectedProduct", index);

window.location.href = "product-details.html";


}

// UPDATE HOME STATS

function updateHomeStats() {

const total = AllProducts.length;

const available = AllProducts.filter(
    (product) => product.status === "Available"
).length;

const outStock = AllProducts.filter(
    (product) => product.status === "Out of Stock"
).length;

const categories = new Set(
    AllProducts.map((product) => product.category)
).size;


document.getElementById("heroProductCount").innerText =
    `${total}+`;

document.getElementById("heroCategoryCount").innerText =
    `${categories}+`;

document.getElementById("totalHomeProducts").innerText =
    total;

document.getElementById("availableHomeProducts").innerText =
    available;

document.getElementById("homeCategories").innerText =
    categories;

document.getElementById("outStockHomeProducts").innerText =
    outStock;


}

// FEATURED PRODUCT

function displayFeaturedProduct() {


if (AllProducts.length === 0) {

    return;
}

const product = AllProducts[0];

const imageContainer =
    document.getElementById("heroProductImage");


imageContainer.innerHTML = `

    <img
        src="${product.productImage}"
        alt="${product.productName}"
        class="img-fluid"
        style="height:200px; object-fit:contain;"
    >

`;


document.getElementById("heroProductName").innerText =
    product.productName;

document.getElementById("heroProductPrice").innerText =
    `₹${Number(product.price).toLocaleString("en-IN")}`;


}

// CATEGORY FILTERS

function createCategoryFilters() {


const categories = [
    ...new Set(
        AllProducts.map((product) => product.category)
    ),
];


categoryFilters.innerHTML = `

    <button
        class="btn btn-light me-2 category-filter active"
        data-category="All">

        All Products

    </button>

`;


categories.forEach((category) => {

    categoryFilters.innerHTML += `

        <button
            class="btn btn-outline-light me-2 category-filter"
            data-category="${category}">

            ${category}

        </button>

    `;

});


const filterButtons =
    document.querySelectorAll(".category-filter");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const category =
            button.dataset.category;


        if (category === "All") {

            displayProducts(AllProducts);

        } else {

            const filtered = AllProducts.filter(
                (product) =>
                    product.category === category
            );

            displayProducts(filtered);

        }

    });

});
    

}

// SEARCH PRODUCTS

function searchProducts(value) {


const searchValue =
    value.toLowerCase().trim();


const filteredProducts =
    AllProducts.filter(
        (product) =>
            product.productName
                .toLowerCase()
                .includes(searchValue) ||

            product.category
                .toLowerCase()
                .includes(searchValue) ||

            product.brand
                .toLowerCase()
                .includes(searchValue)
    );


displayProducts(filteredProducts);


}

// HOME SEARCH

homeProductSearch.addEventListener("input", (e) => {


searchProducts(e.target.value);


});

// NAVBAR SEARCH

navbarSearch.addEventListener("input", (e) => {


homeProductSearch.value = e.target.value;

searchProducts(e.target.value);


});

// CALL FUNCTIONS

displayProducts();

updateHomeStats();

displayFeaturedProduct();

createCategoryFilters();

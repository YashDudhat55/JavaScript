let AllProducts = JSON.parse(localStorage.getItem("products")) || [];


function viewProducts(products = AllProducts) {

    const tableBody = document.querySelector("tbody");

    tableBody.innerHTML = "";


    products.forEach((product, index) => {

        tableBody.innerHTML += `
            <tr>

                <td>
                    ${product.productName}
                </td>

                <td>
                    ${product.category}
                </td>

                <td>
                    ₹${Number(product.price).toLocaleString("en-IN")}
                </td>

                <td>
                    ${product.brand}
                </td>

                <td>
                    <img
                        src="${product.productImage}"
                        alt="${product.productName}"
                        width="100"
                    >
                </td>

                <td>
                    ${product.description}
                </td>

                <td>
                    ${product.colors ? product.colors.join(", ") : ""}
                </td>

                <td>

                    <button
                        class="btn btn-sm btn-primary"
                        onclick="editProduct(${index})">
                        Edit
                    </button>

                    <button
                        class="btn btn-sm btn-danger"
                        onclick="deleteProduct(${product.id})">
                        Delete
                    </button>

                </td>

            </tr>
        `;

    });

}


// Search Product

const searchBox = document.querySelector('input[type="search"]');

searchBox.addEventListener("input", (e) => {

    const searchValue = e.target.value.toLowerCase().trim();


    const filteredProducts = AllProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.brand.toLowerCase().includes(searchValue)
    );


    viewProducts(filteredProducts);

});


// Edit Product

function editProduct(index) {

    window.location.href = `Edit-Product.html?edit=${index}`;

}


// Delete Product

function deleteProduct(id) {

    const productIndex = AllProducts.findIndex(
        (p) => p.id === id
    );


    if (productIndex !== -1) {

        AllProducts.splice(productIndex, 1);

        localStorage.setItem(
            "products",
            JSON.stringify(AllProducts)
        );

        viewProducts();

    }

}


// Display Products

viewProducts();
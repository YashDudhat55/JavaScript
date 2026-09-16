let AllProducts = JSON.parse(localStorage.getItem("products")) || [];

let selectedProduct = localStorage.getItem("selectedProduct");

let product = AllProducts[selectedProduct];

const productDetails = document.getElementById("productDetails");


// Product Details
if (product) {

    productDetails.innerHTML = `
        <div class="product-page">

            <div class="breadcrumb-section">

                <span>Home</span>

                <span>›</span>

                <span>Products</span>

                <span>›</span>

                <strong>${product.productName}</strong>

            </div>


            <div class="product-main">

                <div class="product-left">

                    <div class="thumbnail-list">

                        <div class="thumbnail active-thumbnail">

                            <img
                                src="${product.productImage}"
                                alt="${product.productName}"
                            >

                        </div>

                    </div>


                    <div class="main-product-image-box">

                        <img
                            src="${product.productImage}"
                            alt="${product.productName}"
                            class="main-product-image"
                        >

                    </div>

                </div>


                <div class="product-right">

                    <span class="product-tag">
                        FEATURED PRODUCT
                    </span>


                    <h1>
                        ${product.productName}
                    </h1>


                    <div class="rating-row">

                        <span class="rating-badge">
                            ★ 4.5
                        </span>

                        <span class="rating-info">
                            4.5 Rating
                        </span>

                        <span class="rating-dot">
                            •
                        </span>

                        <span class="rating-info">
                            120 Reviews
                        </span>

                    </div>


                    <div class="product-divider"></div>


                    <div class="description-section">

                        <h3>
                            About this product
                        </h3>

                        <p>
                            ${product.description}
                        </p>

                    </div>


                    <div class="price-card">

                        <span class="price-label">
                            Special Price
                        </span>

                        <div class="price">
                            ₹${Number(product.price).toLocaleString("en-IN")}
                        </div>

                        <span class="tax-text">
                            Inclusive of all taxes
                        </span>

                    </div>


                    <div class="product-options">

                        <div class="option-row">

                            <span class="option-label">
                                Availability
                            </span>

                            <span class="available">
                                ● In Stock
                            </span>

                        </div>


                        <div class="option-row">

                            <span class="option-label">
                                Quantity
                            </span>

                            <div class="quantity-control">

                                <button id="minus">
                                    −
                                </button>

                                <span id="quantity">
                                    1
                                </span>

                                <button id="plus">
                                    +
                                </button>

                            </div>

                        </div>

                    </div>


                    <div class="product-action-buttons">

                        <button class="add-cart-btn">

                            <i class="fa-solid fa-cart-shopping"></i>

                            Add to Cart

                        </button>


                        <button class="buy-now-btn">

                            Buy Now

                            <i class="fa-solid fa-arrow-right"></i>

                        </button>

                    </div>

                </div>

            </div>


            <div class="service-section">

                <div class="service-box">

                    <div class="service-icon">
                        <i class="fa-solid fa-truck-fast"></i>
                    </div>

                    <div class="service-content">

                        <h4>
                            Fast Delivery
                        </h4>

                        <p>
                            Quick and secure delivery
                        </p>

                    </div>

                </div>


                <div class="service-box">

                    <div class="service-icon">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>

                    <div class="service-content">

                        <h4>
                            Secure Payment
                        </h4>

                        <p>
                            100% secure payment
                        </p>

                    </div>

                </div>


                <div class="service-box">

                    <div class="service-icon">
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                    </div>

                    <div class="service-content">

                        <h4>
                            Easy Returns
                        </h4>

                        <p>
                            Simple and hassle-free returns
                        </p>

                    </div>

                </div>


                <div class="service-box">

                    <div class="service-icon">
                        <i class="fa-solid fa-medal"></i>
                    </div>

                    <div class="service-content">

                        <h4>
                            Quality Product
                        </h4>

                        <p>
                            Premium quality guaranteed
                        </p>

                    </div>

                </div>

            </div>

        </div>
    `;


    // Quantity
    let quantity = 1;

    let availableQuantity = Number(product.quantity);


    // PLUS BUTTON
    document.getElementById("plus").addEventListener("click", () => {

        if (quantity < availableQuantity) {

            quantity++;

            document.getElementById("quantity").innerText = quantity;

        } else {

            Toastify({

                text: "Maximum available quantity reached!",

                duration: 3000,

                close: true,

                gravity: "top",

                position: "right",

                stopOnFocus: true,

                style: {

                    background: `
                        linear-gradient(
                            135deg,
                            rgba(30, 58, 110, 0.92),
                            rgba(153, 126, 244, 0.9)
                        )
                    `,

                    backdropFilter: "blur(35px) saturate(190%)",

                    WebkitBackdropFilter:
                        "blur(35px) saturate(190%)",

                    border:
                        "1px solid rgba(255, 255, 255, 0.30)",

                    borderRadius: "20px",

                    boxShadow: `
                        0 10px 40px rgba(20, 20, 40, 0.25),
                        0 0 30px rgba(120, 100, 220, 0.15),
                        inset 0 1px 0 rgba(255, 255, 255, 0.40)
                    `,

                    color: "#ffffff",

                    padding: "18px 25px",

                    fontSize: "15px",

                    fontWeight: "600",

                    letterSpacing: "0.2px"

                }

            }).showToast();

        }

    });


    // MINUS BUTTON
    document.getElementById("minus").addEventListener("click", () => {

        if (quantity > 1) {

            quantity--;

            document.getElementById("quantity").innerText = quantity;

        }

    });

}
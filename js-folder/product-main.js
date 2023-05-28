$(document).ready(function () {
  const selectedProducts = [];


  const savedProducts = localStorage.getItem("selectedProducts");
  if (savedProducts) {
    selectedProducts.push(...JSON.parse(savedProducts));
    displaySelectedProducts();
  }

  function addToCart(product) {
    selectedProducts.push(product);
    displaySelectedProducts();
    saveSelectedProducts();
  }

  function displaySelectedProducts() {
    const purchasedProductsContainer = $("#purchasedProductsContainer");
    purchasedProductsContainer.empty();

    for (const product of selectedProducts) {
      const productDiv = $("<div>").text(product);
      purchasedProductsContainer.append(productDiv);
    }
  }

  function saveSelectedProducts() {
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }

  $("#productContainer").on("click", ".buy-product-btn", function () {
    const productIndex = $(this).closest(".product-div").index();
    const productName = products[productIndex].name;
    const firstWord = productName.split(" ")[0];
    addToCart(firstWord);
    sessionStorage.setItem("selectedProductIndex", productIndex);
    displayPurchasedProduct();
    window.location.href = "card-information.html";
  });

  const products = [
    {
      name: "COOFANDY Men's Casual Button Down Shirts Short Sleeve Regular Fit Fashion Camp Beach Shirts Tops",
      price: 29.99,
      category: "fashion",
      info: "COOFANDY Men's Casual Button Down Shirts Short Sleeve Regular Fit Fashion Camp Beach Shirts Tops",
      img: "https://m.media-amazon.com/images/I/812OpSgjx3L._AC_UX385_.jpg",
    },
    {
      name: "adidas Originals Women's Nizza Platform Sneaker",
      price: 55.0,
      category: "shoes",
      info: "adidas",
      img: "https://m.media-amazon.com/images/I/71syckZI13L._AC_UX500_.jpg",
    },
    {
      name: "NEW SteelSeries Arctis Nova 1 Multi-System Gaming Headset — Hi-Fi Drivers — 360° Spatial Audio — Comfort Design — Durable — Ultra Lightweight — Noise-Cancelling Mic — PC, PS5/PS4, Switch, Xbox - Black",
      price: 56.99,
      category: "electronic",
      info: "SteelSeries",
      img: "https://m.media-amazon.com/images/I/71pY4rbIg0L._AC_SX425_.jpg",
    },
    {
      name: "Olay Regenerist Retinol Moisturizer, Retinol 24 Night Face Cream with Niacinamide, Anti-Wrinkle Fragrance-Free 1.7 oz, Includes Olay Whip Travel Size for Dry Skin",
      price: 34,
      category: "skincare",
      info: "Olay",
      img: "https://m.media-amazon.com/images/I/71oDyc9d+RL._SX425_.jpg",
    },
    {
      name: "Alternative Men's Hoodie, Eco Zip Up Camo Triblend Jersey Hooded Sweatshirt",
      price: 27.23,
      category: "fashion",
      info: "Hoodie",
      img: "https://m.media-amazon.com/images/I/61cak0xYO9S._AC_UY500_.jpg",
    },
    {
      name: "Sperry Women’s Crest Vibe Sneaker",
      price: 68.95,
      category: "shoes",
      info: "Sperry",
      img: "https://m.media-amazon.com/images/I/71jcyeiQSeL._AC_UX500_.jpg",
    },
    {
      name: "NEOCHY Comfortable Luxury Gaming Chair Ergonomic Computer Cockpit Chair with Led Lights Comfortable Racing Simulator Cockpit Game Chair with Hanging 3 Screens Red (Color : Black)",
      price: 15.04,
      category: "electronic",
      info: "NEOCHY",
      img: "https://m.media-amazon.com/images/I/41+wPIt35lL._AC_.jpg",
    },
    {
      name: "Amazon Basics Clarifying Pink Grapefruit Body Wash, 2% Salicylic Acid Acne Treatment, Dermatologist Tested, 8.5 Fluid Ounces, Pack of 1",
      price: 4,
      category: "skincare",
      info: "Grapefruit",
      img: "https://m.media-amazon.com/images/I/61fdWp44IgL._AC_SY879_.jpg",
    },
    {
      name: "Dickies Men's Short Sleeve Pocket Tee Big-tall",
      price: 39.0,
      category: "fashion",
      info: "Dickies",
      img: "https://m.media-amazon.com/images/I/71C+SjhiobL._AC_UY500_.jpg",
    },
    {
      name: "Soda ACCOUNT ~ Women Open Toe Two Bands Lug sole Fashion Block Heel Sandals with Adjustable Ankle Strap",
      price: 35.24,
      category: "shoes",
      info: "Fashion",
      img: "https://m.media-amazon.com/images/I/61lpuRrYbdS._AC_UX500_.jpg",
    },
    {
      name: "Gaming Chair Ergonomic Office Chair PU Leather Computer Chair High Back Desk Chair Adjustable Swivel Task Chair with Lumbar Support/Flip-up Armrests, Blue",
      price: 40,
      category: "electronic",
      info: "Gaming Chair",
      img: "https://m.media-amazon.com/images/I/61Amla+o88L._AC_SX522_.jpg",
    },
    {
      name: "Amazon Basics Night-Time Baby Bath, 13.6 Fluid Ounce, 1-Pack (Previously Solimo)",
      price: 2.69,
      category: "skincare",
      info: "Night-Time Baby Bath",
      img: "https://m.media-amazon.com/images/I/61jJSOlXFwL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Dokotoo Womens 2023 Spring Summer Deep V Neck Ruffle Long Sleeve Floral Print Mini Dress",
      price: 40.99,
      category: "fashion",
      info: "Dokotoo Womens 2023 Spring Summer",
      img: "https://m.media-amazon.com/images/I/6129iYIiOjL._AC_UY500_.jpg",
    },
    {
      name: "The Drop Women's Monika Flat H-Band Slide Sandal",
      price: 34.9,
      category: "shoes",
      info: "The Drop Women's Monika Flat H-Band Slide Sandal",
      img: "https://m.media-amazon.com/images/I/71cx-qsSveL._AC_UX500_.jpg",
    },
    {
      name: "SteelSeries Aerox 5 Wireless - Gaming Mouse - 18000 CPI -- TrueMove Air Optical Sensor - Ultra-lightweight Water Resistant Design – 180+ Hour Battery Life",
      price: 106,
      category: "electronic",
      info: "SteelSeries",
      img: "https://m.media-amazon.com/images/I/81-nE4e2YvL._AC_SX679_.jpg",
    },
    {
      name: "PanOxyl Acne Foaming Wash Benzoyl Peroxide 10% Maximum Strength Antimicrobial, 5.5 Oz",
      price: 9.77,
      category: "skincare",
      info: "PanOxyl",
      img: "https://m.media-amazon.com/images/I/71-GCIBN8wL._SX425_.jpg",
    },
    {
      name: "Riders by Lee Indigo Women's Denim Jacket",
      price: 38.99,
      category: "fashion",
      info: "Riders",
      img: "https://m.media-amazon.com/images/I/71iXiF9UhRL._AC_UY500_.jpg",
    },
    {
      name: "Hurley Women's Ceta Sneakers",
      price: 34.53,
      category: "shoes",
      info: "Hurley Women's Ceta Sneakers",
      img: "https://m.media-amazon.com/images/I/51JB34RXsZL._AC_UY625_.jpg",
    },
    {
      name: "Razer Mamba Elite Wired Gaming Mouse: 16,000 DPI Optical Sensor - Chroma RGB Lighting - 9 Programmable Buttons - Mechanical Switches",
      price: 41,
      category: "electronic",
      info: "Razer Mamba Elite Wired Gaming Mouse",
      img: "https://m.media-amazon.com/images/I/61YTpIudkeL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "e.l.f. SKIN Blemish Breakthrough Blemish Control Basics Kit, Travel-Size Acne Skincare Routine, Cleanser, Serum & Moisturizer, Vegan & Cruelty-Free",
      price: 15.0,
      category: "skincare",
      info: "e.l.f. SKIN Blemish Breakthrough Blemish Control Basics Kit",
      img: "https://m.media-amazon.com/images/I/61rdy3wROAL._SX425_.jpg",
    },
  ];

  function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();


    const filteredProducts = products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(searchTerm);
    });


    resultsContainer.innerHTML = "";


    filteredProducts.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3 class="searchproduct-name">${product.name}</h3>
        <p>Price: $${product.price}</p>
      `;
      resultsContainer.appendChild(productDiv);
    });


    if (searchTerm !== "") {
      resultsContainer.style.display = "block";
    } else {
      resultsContainer.style.display = "none";
    }
  }
  searchInput.addEventListener("input", searchProducts);

  function generateProductHTML(product) {
    return `
      <div class="product-div" data-product-id="${product.name.replace(
        /\s/g,
        "-"
      )}">
        <img class="product-image" src="${product.img}" />
        <p class="product-name">${product.name}</p>
        <p class="product-price">Price: $${product.price.toFixed(2)}</p>
        <button class="more-info-btn">More Info</button>
        <div class="product-info" style="display: none;">${product.info}</div>
        <button class="buy-product-btn">Buy Product</button>
        <button class="add-to-basket-btn">Add to Basket</button>
      </div>
    `;
  }

  const productContainer = $("#productContainer");
  const purchasedProductContainer = $("#purchasedProductContainer");

  function displayProducts(category) {
    productContainer.empty();

    const filteredProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);

    for (const product of filteredProducts) {
      const productHTML = generateProductHTML(product);
      productContainer.append(productHTML);
    }
  }

  function displayPurchasedProduct() {
    const productIndex = sessionStorage.getItem("selectedProductIndex");
    const product = products[productIndex];

    if (product) {
      const purchasedProductHTML = generateProductHTML(product);
      purchasedProductContainer.html(purchasedProductHTML);
    } else {
      purchasedProductContainer.html("<p>No purchased product.</p>");
    }
  }
  $("#clearHistoryBtn").click(function () {
    localStorage.removeItem("selectedProducts");
    location.reload();
  });

  $("#ClearStorage").click(function () {
    localStorage.removeItem("basketItems");
    location.reload();
  });

  $(".filterBtn").click(function () {
    const category = $(this).data("category");
    displayProducts(category);
  });

  $("#productContainer").on("click", ".more-info-btn", function () {
    const productInfo = $(this).siblings(".product-info").text();
    showProductInfo(productInfo);
  });

  function showProductInfo(info) {
    const productInfoContainer = $("#productInfo");
    const productContainer = $("#productContainer");

    productContainer.children().hide();

    productInfoContainer.text(info).show();

    const backButton = $("<button>").text("Back").attr("id", "backBtn");
    productInfoContainer.append(backButton);

    backButton.click(function () {
      productInfoContainer.hide();
      backButton.remove();
      productContainer.children().show();
    });
  }

  $("#productContainer").on("click", ".add-to-basket-btn", function () {
    const productIndex = $(this).closest(".product-div").index();
    const product = products[productIndex];
    addToBasket(product.name);
  });

  function addToBasket(productName) {
    const listItem = $("<li>").addClass("list-group-item").text(productName);
    $("#basketList").append(listItem);
    $("#basketList").on("click", "li", function() {
      const productName = $(this).text();
      const product = products.find(p => p.name === productName);
      if (product) {
        showProductInfo(product.info);
      }
    }); 


    const basketItems = JSON.parse(localStorage.getItem("basketItems")) || [];
    basketItems.push(productName);
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }


  const savedBasketItems =
    JSON.parse(localStorage.getItem("basketItems")) || [];
  for (const item of savedBasketItems) {
    const product = products.find((p) => p.name === item);
    if (product) {
      const listItem = $("<li>").addClass("list-group-item").text(product.name);
      $("#basketList").append(listItem);
    }
  }


  displayProducts("all");


  displayPurchasedProduct();

  const selectedProductIndex = sessionStorage.getItem("selectedProductIndex");
  if (selectedProductIndex) {
    const product = products[selectedProductIndex];
    const productHTML = generateProductHTML(product);
    $(".myproduct").html(productHTML);
  }
  var firebaseConfig = {
    apiKey: "AIzaSyDO7PndBKsBQgvLIZbbAFACR79duE-9kCs",
    authDomain: "form-22e0f.firebaseapp.com",
    projectId: "form-22e0f",
    storageBucket: "form-22e0f.appspot.com",
    messagingSenderId: "453418360946",
    appId: "1:453418360946:web:cf39b45019ba40e7f622eb",
    measurementId: "G-XMKM2Z0VLG",
  };
  firebase.initializeApp(firebaseConfig);
  var name = localStorage.getItem("name");

var accountNameElement = document.getElementById("accountName");

function updateAccountName() {
  if (name) {
    accountNameElement.textContent = name;
  } else {
    accountNameElement.textContent = "Guest";
  }
}

updateAccountName();

var logoutLink = document.getElementById("logoutLink");
if (logoutLink) {
  logoutLink.addEventListener("click", function (event) {
    localStorage.removeItem("name");
    window.location.href = "../index.html";
  });
}

var logoutAllLink = document.getElementById("logoutAllLink");
if (logoutAllLink) {
  logoutAllLink.addEventListener("click", function (event) {
    localStorage.removeItem("name");
    var dropdownMenu = document.querySelector(".dropdown-menu");
    dropdownMenu.innerHTML = "";

    firebase
      .auth()
      .signOut()
      .then(function () {
        window.location.href = "../index.html";
      })
      .catch(function (error) {
        console.log("Error logging out all sessions:", error);
      });
  });
}


$(".featured-button").click(function () { 
  location.href = "../index3.html"
  
});

});

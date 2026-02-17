
const container = document.getElementById("products");  

const detailContainer = document.getElementById("Product-details");
const links = document.querySelectorAll(".menu a");

let allProducts = []; 

async function getProducts() {
  try {
    const res = await 
    fetch("https://fakestoreapi.com/products");
    allProducts = await res.json();

    displayProducts(allProducts); 

  } 
    catch (error) {
    console.log("Error:", error);
  }
}

getProducts();

function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="getProductId(${product.id})">
          View Details
        </button>

      </div>
    `;

  });
}


links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const category = link.getAttribute("data-cat");

    if (category === "all") {
      displayProducts(allProducts);
    } 
    else {
      const filtered = allProducts.filter(p => p.category === category);
      displayProducts(filtered);
    }
  });
});


function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.image}" alt="">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <button onclick="getProductId(${product.id})">
          View Details
        </button>

      </div>
    `;

  });
}
 function getProductId(productId) {
  console.log(productId);
  localStorage.setItem("productId", productId);
  window.location.href = "./detail.html";
}
 









































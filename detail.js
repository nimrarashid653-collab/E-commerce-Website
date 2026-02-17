const detailContainer = document.getElementById("Product-details");
const productId = localStorage.getItem("productId");

async function getProductDetails(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    detailContainer.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
      <p>${product.description}</p>
      <h4>Price: $${product.price}</h4>
    <button onclick="goBack()">Go Back</button>
    `;
  } catch (error) {
    console.log("Error:", error);
  }
}

function goBack() {
    // back ik method hai jo user ko previous page par le jata hai. Is function ko call karne se user apne browser ke history mein ek step peeche chala jayega 
  window.history.back();
}

getProductDetails(productId);
// Get the "Shop Now" button element
const shopNowBtn = document.querySelector("button");

// Add a click event listener to the button
shopNowBtn.addEventListener("click", function () {
  // Redirect the user to the products page
  window.location.href = "products.html";
});
// Get all the product image elements
const productImages = document.querySelectorAll(".products li img");

// Loop through each image element and add a click event listener to it
productImages.forEach(function (img) {
  img.addEventListener("click", function () {
    // Redirect the user to the products page
    window.location.href = "products.html";
  });
});

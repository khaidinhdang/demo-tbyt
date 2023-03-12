// Get all the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll("button");
// Add a click event listener to each button
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // Get the article element that contains the clicked button
    var article = event.target.closest("article");
    // Get the product name and price from the article element
    var productName = article.querySelector("h2").textContent;
    var productPrice = article.querySelector("p:first-of-type").textContent;
    // Create a new item object with the product name and price
    var item = {
      name: productName,
      price: productPrice,
    };
    // Add the item to the shopping cart (this code assumes the shopping cart is stored in localStorage)
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    // Show a confirmation message to the user
    alert("Item added to cart: " + productName);
  });
});

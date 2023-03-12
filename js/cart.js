const cartItems = document.getElementById("cart-items");
const checkoutButton = document.getElementById("checkout-button");
const subtotalElement = document.getElementById("subtotal");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");

let cart = [];

// Add event listener for checkout button
checkoutButton.addEventListener("click", () => {
  // Perform checkout process
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
});

function addToCart(product, quantity, price) {
  // Check if product already exists in cart
  let existingItem = cart.find((item) => item.product === product);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      product: product,
      quantity: quantity,
      price: price,
    });
  }
  updateCart();
}

function removeFromCart(product) {
  cart = cart.filter((item) => item.product !== product);
  updateCart();
}

function updateCart() {
  // Clear cart items
  cartItems.innerHTML = "";

  // Add new cart items
  cart.forEach((item) => {
    const row = document.createElement("tr");
    const products = document.createElement("td");
    const productQuantity = document.createElement("td");
    const productPrice = document.createElement("td");
    const productTotal = document.createElement("td");
    const removeButton = document.createElement("button");
    products.textContent = item.product;
    productQuantity.textContent = item.quantity;
    productPrice.textContent = `$${item.price.toFixed(2)}`;
    productTotal.textContent = `$${(item.quantity * item.price).toFixed(2)}`;
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeFromCart(item.product));

    row.appendChild(products);
    row.appendChild(productQuantity);
    row.appendChild(productPrice);
    row.appendChild(productTotal);
    row.appendChild(removeButton);

    cartItems.appendChild(row);
  });
  // Update cart totals
  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  subtotalElement.textContent = "$" + subtotal.toFixed(2);
  shippingElement.textContent = "$" + shipping.toFixed(2);
  totalElement.textContent = "$" + total.toFixed(2);

  // Disable checkout button if cart is empty
  if (cart.length === 0) {
    checkoutButton.disabled = true;
  } else {
    checkoutButton.disabled = false;
  }
}

// Listen for messages from the product page
window.addEventListener("message", (event) => {
  if (event.data && event.data.type === "add-to-cart") {
    addToCart(event.data.products, event.data.quantity, event.data.price);
  }
});

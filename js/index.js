// // Lấy phần tử nút "Shop Now"
// const shopNowBtn = document.querySelector("button");

// // Thêm sự kiện click cho nút "Shop Now"
// shopNowBtn.addEventListener("click", () => {
//   // Chuyển hướng đến trang Products
//   window.location.href = "products.html";
// });

// // Lấy tất cả các sản phẩm trong section "Featured Products"
// const products = document.querySelectorAll(".products li");

// // Thêm sự kiện click cho từng sản phẩm
// products.forEach((product) => {
//   product.addEventListener("click", () => {
//     // Lấy thông tin sản phẩm bằng cách truy cập vào các phần tử con của li
//     const imgSrc = product.querySelector("img").getAttribute("src");
//     const title = product.querySelector("h3").textContent;
//     const price = product.querySelector("p").textContent;

//     // Lưu thông tin sản phẩm vào localStorage để sử dụng ở trang Cart
//     localStorage.setItem(
//       "cartItem",
//       JSON.stringify({
//         imgSrc,
//         title,
//         price,
//       })
//     );

//     // Chuyển hướng đến trang Cart
//     window.location.href = "cart.html";
//   });
// });
// // Lấy danh sách tất cả các nút "Add to Cart"
// var addToCartButtons = document.querySelectorAll("button");

// // Lặp lại từng nút "Add to Cart"
// for (var i = 0; i < addToCartButtons.length; i++) {
//   // Lắng nghe sự kiện click cho mỗi nút "Add to Cart"
//   addToCartButtons[i].addEventListener("click", function () {
//     // Lấy thông tin sản phẩm từ phần tử cha của nút "Add to Cart"
//     var product = this.parentNode;
//     var productName = product.querySelector("h2").textContent;
//     var productPrice = product.querySelector("p").textContent;

//     // Tạo một đối tượng sản phẩm mới
//     var newItem = {
//       name: productName,
//       price: productPrice,
//     };

//     // Thêm sản phẩm vào giỏ hàng
//     cart.push(newItem);
//     alert("Sản phẩm đã được thêm vào giỏ hàng của bạn.");
//   });
// }

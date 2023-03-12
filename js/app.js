const contactForm = document.querySelector("#contact-form");
const messageContainer = document.querySelector(".message-container");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Lấy giá trị của các trường input và textarea
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  // Gửi dữ liệu đến trang xử lý phía máy chủ hoặc xử lý bằng JavaScript
  // ở đây ta giả sử dữ liệu đã được gửi thành công
  const successMessage =
    "Your message has been sent successfully. We will get back to you soon.";

  // Hiển thị thông báo kết quả trả về
  messageContainer.innerHTML = successMessage;
  messageContainer.classList.add("success");
});

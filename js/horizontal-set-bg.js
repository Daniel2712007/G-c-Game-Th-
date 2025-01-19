document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các phần tử có class .horizontal-image
  const horizontalImages = document.querySelectorAll(".horizontal-image");
  horizontalImages.forEach((element) => {
    const bg = element.getAttribute("data-setbg");
    if (bg) {
      // Đặt ảnh nền từ thuộc tính data-setbg
      element.style.backgroundImage = `url(${bg})`;
    }
  });
});

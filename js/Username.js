document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  if (nameInput) {
    console.log("Phần tử #name được tìm thấy.");
    nameInput.addEventListener("input", function() {
      // Chỉ cho phép ký tự chữ và số, loại bỏ khoảng trắng và dấu câu
      this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
      console.log("Giá trị sau khi nhập:", this.value);
    });
  } else {
    console.error("Không tìm thấy phần tử #name.");
  }
});

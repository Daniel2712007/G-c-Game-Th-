document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  if (nameInput) {
    nameInput.addEventListener("input", function() {
      // Chỉ cho phép các ký tự chữ cái và số (loại bỏ khoảng trắng và dấu câu)
      this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*(),.?":{}|<>_-+=]/g, '');
    });
  }
});

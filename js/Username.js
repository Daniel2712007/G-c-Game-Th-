document.getElementById("name").addEventListener("input", function() {
  // Cho phép chữ cái, số và các ký tự đặc biệt
  this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/g, '');
});

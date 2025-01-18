document.querySelectorAll('input.only-numbers').forEach(input => {
  input.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, ''); // Loại bỏ tất cả ký tự không phải số
  });
});

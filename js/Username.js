document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("name").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z0-9!@#$%^&*(),.?":{}|<>_-+=]/g, '');
  });
});

document.querySelector('form').addEventListener('submit', function (event) {
    // Lấy giá trị từ các trường nhập liệu
    const email = document.querySelector('input[placeholder="Địa chỉ email"]').value.trim();
    const displayName = document.querySelector('input[placeholder="Tên hiển thị"]').value.trim();
    const username = document.querySelector('input[placeholder="Tên tài khoản"]').value.trim();
    const dob = document.querySelector('input[type="date"]').value.trim();
    const password = document.querySelector('input[placeholder="mật khẩu"]').value.trim();
    const confirmPassword = document.querySelector('input[placeholder="Xác nhận mật khẩu"]').value.trim();

    // Kiểm tra các trường
    if (!email || !displayName || !username || !dob || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin.');
        // Ngăn biểu mẫu gửi đi
        event.preventDefault();
        return;
    }

    // Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        // Ngăn biểu mẫu gửi đi
        event.preventDefault();
        return;
    }

    // Nếu hợp lệ, cho phép gửi biểu mẫu
    alert('Đăng ký thành công!');
});

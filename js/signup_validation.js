document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn không gửi form đi

    // Lấy giá trị từ các trường nhập liệu
    const email = document.querySelector('input[placeholder="Địa chỉ email"]').value.trim();
    const displayName = document.querySelector('input[placeholder="Tên hiển thị"]').value.trim();
    const username = document.querySelector('input[placeholder="Tên tài khoản"]').value.trim();
    const dob = document.querySelector('input[type="date"]').value.trim();
    const password = document.querySelector('input[placeholder="Mật khẩu"]').value.trim();
    const confirmPassword = document.querySelector('input[placeholder="Xác nhận mật khẩu"]').value.trim();

    // Kiểm tra các trường
    if (!email || !displayName || !username || !dob || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin.');
        return;
    }

    // Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không khớp.');
        return;
    }

    // Chuyển hướng đến trang đăng nhập
    alert('Đăng ký thành công! Chuyển hướng đến trang đăng nhập...');
    window.location.href = 'login.html';
});

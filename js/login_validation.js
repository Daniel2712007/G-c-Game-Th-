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
        showPopup("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Kiểm tra mật khẩu khớp nhau
    if (password !== confirmPassword) {
        showPopup("Mật khẩu và xác nhận mật khẩu không khớp!");
        return;
    }

    // Chuyển hướng đến trang đăng nhập
    showPopup("Đăng ký thành công! Chuyển hướng đến trang đăng nhập...", true);
});

// Hàm hiển thị popup
function showPopup(message, redirect = false) {
    // Kiểm tra nếu popup đã tồn tại
    if (document.querySelector('.popup-overlay') || document.querySelector('.popup')) {
        return;
    }

    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    document.body.appendChild(overlay);
    overlay.style.display = 'block';

    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <h3>${message}</h3>
        <button id="closePopup">OK</button>
    `;
    document.body.appendChild(popup);
    popup.style.display = 'block';

    // Đóng popup khi bấm nút
    document.getElementById('closePopup').addEventListener('click', function () {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        document.body.removeChild(popup);
        document.body.removeChild(overlay);

        // Nếu cần chuyển hướng
        if (redirect) {
            window.location.href = 'login.html';
        }
    });
}

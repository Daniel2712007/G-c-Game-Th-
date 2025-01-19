document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn form gửi đi

    // Lấy giá trị từ các trường nhập liệu
    const email = document.querySelector('input[placeholder="Địa chỉ email"]').value.trim();
    const password = document.querySelector('input[placeholder="Mật khẩu"]').value.trim();

    // Kiểm tra các trường
    if (!email || !password) {
        showPopup("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Nếu thông tin hợp lệ
    showPopup("Đăng nhập thành công!", true);
});

// Hàm hiển thị popup (giống như đã làm ở trang đăng ký)
function showPopup(message, redirect = false) {
    // Kiểm tra nếu popup đã tồn tại
    if (document.querySelector('.popup-overlay') || document.querySelector('.popup')) {
        return;
    }

    // Tạo overlay
    const overlay = document.createElement('div');
    overlay.classList.add('popup-overlay');
    document.body.appendChild(overlay);
    overlay.style.display = 'block';

    // Tạo popup
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
            window.location.href = 'index.html'; // Chuyển đến trang chính
        }
    });
}

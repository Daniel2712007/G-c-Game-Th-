document.addEventListener("DOMContentLoaded", function () {
    // Chỉ áp dụng cho khung game Hoa
    const hoaImage = document.querySelector('.horizontal-hoa-image');
    if (hoaImage) {
        const bg = hoaImage.getAttribute('data-setbg-hoa');
        if (bg) {
            hoaImage.style.backgroundImage = `url('${bg}')`;
        }
    }
});

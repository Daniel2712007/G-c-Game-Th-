function randomizeNumberWithDeceleration(targetClassName, totalDuration) {
    const elements = document.querySelectorAll(`.${targetClassName}`); // Lấy tất cả phần tử có class cụ thể

    elements.forEach((element) => {
        const span = element.querySelector("span"); // Tìm thẻ <span> bên trong
        if (!span) return; // Bỏ qua nếu không có thẻ <span>

        const finalNumber = parseInt(span.textContent, 10); // Lấy số từ nội dung thẻ <span>
        const totalSteps = 40; // Số bước
        const minInterval = 5; // Thời gian nhanh nhất giữa các bước (ms)
        const maxInterval = 200; // Thời gian chậm nhất giữa các bước (ms)
        
        let currentStep = 0;

        function calculateInterval(step) {
            const progress = step / totalSteps; // Tiến trình từ 0 đến 1
            return minInterval + (maxInterval - minInterval) * Math.pow(progress, 2); // Phi tuyến tính
        }

        function updateNumber() {
            if (currentStep < totalSteps) {
                currentStep++;
                const randomValue = Math.floor(Math.random() * 100); // Tạo số ngẫu nhiên
                span.textContent = randomValue; // Cập nhật nội dung của thẻ <span>

                // Tính thời gian chờ cho bước tiếp theo
                const nextInterval = calculateInterval(currentStep);
                setTimeout(updateNumber, nextInterval);
            } else {
                span.textContent = finalNumber; // Hiển thị số cuối cùng
            }
        }

        updateNumber(); // Bắt đầu hiệu ứng
    });
}

// Khởi chạy hiệu ứng cho các phần tử có class 'number-display'
document.addEventListener("DOMContentLoaded", () => {
    randomizeNumberWithDeceleration('number-display', 2000); // Hiệu ứng trong 2 giây
});

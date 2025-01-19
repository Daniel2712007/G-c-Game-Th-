function randomizeNumberWithDeceleration(targetClassName, totalDuration) {
    const elements = document.querySelectorAll(`.${targetClassName}`); // Lấy tất cả phần tử có class cụ thể

    elements.forEach((element) => {
        const finalNumber = parseInt(element.textContent, 10); // Lấy số từ nội dung HTML
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
                element.textContent = randomValue;

                // Tính thời gian chờ cho bước tiếp theo
                const nextInterval = calculateInterval(currentStep);
                setTimeout(updateNumber, nextInterval);
            } else {
                element.textContent = finalNumber; // Hiển thị số cuối cùng
            }
        }

        updateNumber(); // Bắt đầu hiệu ứng
    });
}

// Khởi chạy hiệu ứng cho các phần tử có class 'number-display'
document.addEventListener("DOMContentLoaded", () => {
    randomizeNumberWithDeceleration('number-display', 2000); // Hiệu ứng trong 2 giây
});

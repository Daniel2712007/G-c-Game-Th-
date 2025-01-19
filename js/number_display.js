function randomizeNumberWithDeceleration(targetClassName, totalDuration) {
    const elements = document.querySelectorAll(`.${targetClassName}`); // Lấy tất cả phần tử có class cụ thể

    elements.forEach((element) => {
        const span = element.querySelector("span"); // Tìm thẻ <span> bên trong
        if (!span) return; // Bỏ qua nếu không có thẻ <span>

        // Tách số và chữ
        const textContent = span.textContent.trim();
        const matches = textContent.match(/(\d+)(.*)/); // Tách số và phần chữ (nếu có)
        if (!matches) return; // Bỏ qua nếu không tìm thấy số

        const finalNumber = matches[1]; // Phần số
        const suffix = matches[2] || ""; // Phần chữ (nếu có)
        const totalSteps = 40; // Số bước
        const minInterval = 5; // Thời gian nhanh nhất giữa các bước (ms)
        const maxInterval = 200; // Thời gian chậm nhất giữa các bước (ms)
        
        let currentStep = 0;

        function calculateInterval(step) {
            const progress = step / totalSteps; // Tiến trình từ 0 đến 1
            return minInterval + (maxInterval - minInterval) * Math.pow(progress, 2); // Phi tuyến tính
        }

        function generateRandomNumber(length) {
            // Tạo một số ngẫu nhiên với đúng số chữ số
            const min = Math.pow(10, length - 1); // Số nhỏ nhất với 'length' chữ số
            const max = Math.pow(10, length) - 1; // Số lớn nhất với 'length' chữ số
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function updateNumber() {
            if (currentStep < totalSteps) {
                currentStep++;
                const randomValue = generateRandomNumber(finalNumber.length); // Tạo số ngẫu nhiên có cùng độ dài
                span.textContent = randomValue + suffix; // Cập nhật nội dung của thẻ <span>

                // Tính thời gian chờ cho bước tiếp theo
                const nextInterval = calculateInterval(currentStep);
                setTimeout(updateNumber, nextInterval);
            } else {
                span.textContent = finalNumber + suffix; // Hiển thị số cuối cùng với chữ
            }
        }

        updateNumber(); // Bắt đầu hiệu ứng
    });
}

// Khởi chạy hiệu ứng cho các phần tử có class 'number-display'
document.addEventListener("DOMContentLoaded", () => {
    randomizeNumberWithDeceleration('number-display', 2000); // Hiệu ứng trong 2 giây
});

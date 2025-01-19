function randomizeNumberWithDeceleration(targetClassName, totalDuration) {
    const elements = document.querySelectorAll(`.${targetClassName}`);

    elements.forEach((element) => {
        const span = element.querySelector("span");
        if (!span) return;

        // Tách số và phần chữ
        const textContent = span.textContent.trim();
        const matches = textContent.match(/^(\d+)(.*)/); // Tìm số ở đầu và phần chữ sau đó
        if (!matches) return;

        const finalNumber = matches[1]; // Phần số
        const suffix = matches[2] || ""; // Phần chữ (nếu có)
        const totalSteps = 40;
        const minInterval = 5;
        const maxInterval = 200;

        let currentStep = 0;

        function calculateInterval(step) {
            const progress = step / totalSteps;
            return minInterval + (maxInterval - minInterval) * Math.pow(progress, 2);
        }

        function generateRandomNumber(length) {
            const min = Math.pow(10, length - 1);
            const max = Math.pow(10, length) - 1;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function updateNumber() {
            if (currentStep < totalSteps) {
                currentStep++;
                const randomValue = generateRandomNumber(finalNumber.length);
                span.textContent = randomValue + suffix;

                const nextInterval = calculateInterval(currentStep);
                setTimeout(updateNumber, nextInterval);
            } else {
                span.textContent = finalNumber + suffix; // Hiển thị kết quả cuối cùng
            }
        }

        updateNumber();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    randomizeNumberWithDeceleration("number-display", 2000);
});

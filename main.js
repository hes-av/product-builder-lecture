let history = [];

// Theme Switching Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ 라이트 모드';
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 다크 모드';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ 라이트 모드';
    }
});

// Lotto Logic
function getColor(num) {
    if (num <= 10) return "#fbc400";
    if (num <= 20) return "#69c8f2";
    if (num <= 30) return "#ff7272";
    if (num <= 40) return "#aaa";
    return "#b0d840";
}

function generateNumbers() {
    let numbers;
    let key;

    do {
        numbers = [];

        while (numbers.length < 6) {
            let num = Math.floor(Math.random() * 45) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }

        numbers.sort((a,b) => a-b);
        key = numbers.join(",");

    } while (history.includes(key));

    history.push(key);
    return numbers;
}

function displayNumbers(numbers) {
    const lottoResult = document.getElementById("lottoResult");
    let row = document.createElement("div");
    row.style.marginBottom = "15px";

    numbers.forEach(num => {
        let ball = document.createElement("span");
        ball.className = "ball";
        ball.style.background = getColor(num);
        ball.textContent = num;
        row.appendChild(ball);
    });

    lottoResult.appendChild(row);
    // Auto scroll to bottom
    lottoResult.scrollTop = lottoResult.scrollHeight;
}

function generateOne() {
    displayNumbers(generateNumbers());
}

function generateFive() {
    for (let i = 0; i < 5; i++) {
        displayNumbers(generateNumbers());
    }
}

function resetLotto() {
    history = [];
    document.getElementById("lottoResult").innerHTML = "";
}

// Global scope for HTML onclick attributes
window.generateOne = generateOne;
window.generateFive = generateFive;
window.resetLotto = resetLotto;

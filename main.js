let history = [];

// Teachable Machine Model URL
const URL = "https://teachablemachine.withgoogle.com/models/7T9onZPlU/";
let model, labelContainer, maxPredictions;

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

// AI Model Logic
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
}

// Image Upload and Preview
const uploadArea = document.getElementById('upload-area');
const imageInput = document.getElementById('image-input');
const faceImage = document.getElementById('face-image');
const placeholder = document.getElementById('placeholder');
const loading = document.getElementById('loading');
const resultContainer = document.getElementById('result-container');

uploadArea.addEventListener('click', () => imageInput.click());

imageInput.addEventListener('change', function(e) {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = async function(e) {
            faceImage.src = e.target.result;
            faceImage.style.display = 'block';
            placeholder.style.display = 'none';
            
            loading.style.display = 'block';
            resultContainer.style.display = 'none';
            
            if (!model) await init();
            predict();
        };
        reader.readAsDataURL(this.files[0]);
    }
});

async function predict() {
    const prediction = await model.predict(faceImage);
    loading.style.display = 'none';
    resultContainer.style.display = 'block';
    
    labelContainer.innerHTML = "";
    
    // Sort predictions to find the winner
    prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
    
    const winner = prediction[0].className;
    document.getElementById('result-message').innerText = `당신은 '${winner}'상 입니다!`;

    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const probability = (prediction[i].probability * 100).toFixed(0);
        
        const barContainer = document.createElement("div");
        barContainer.className = "bar-container";
        
        const bar = document.createElement("div");
        bar.className = `bar ${className === '강아지' ? 'dog-bar' : 'cat-bar'}`;
        bar.style.width = "0%"; // Initial for animation
        bar.innerHTML = `<span>${className} (${probability}%)</span>`;
        
        barContainer.appendChild(bar);
        labelContainer.appendChild(barContainer);
        
        // Trigger animation
        setTimeout(() => {
            bar.style.width = probability + "%";
        }, 100);
    }
}

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

// Global scope
window.generateOne = generateOne;
window.generateFive = generateFive;
window.resetLotto = resetLotto;

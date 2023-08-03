const displayResult = document.getElementById('result');
const btn = document.getElementById('btn');
const progress = document.getElementById('progress');

btn.addEventListener("click", () => {
    setTimeout(() => {
        displayResult.innerText = Math.floor(Math.random() * 100);
        progress.style.display = "none";
    }, 3000)
    displayResult.innerText = "";
    progress.style.display = "block";
});

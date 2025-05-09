const coin = document.querySelector("#coin");
const button = document.querySelector("#flip");
const statusLabel = document.querySelector("#status");
const heads = document.querySelector("#headsCount");
const tails = document.querySelector("#tailsCount");

let headsCount = 0;
let tailsCount = 0;
let isAnimating = false;


function processResult(result) {
    if (result === "heads") {
        headsCount++;
        heads.innerHTML = headsCount;
    } else {
        tailsCount++;
        tails.innerHTML = tailsCount;
    }
    statusLabel.innerText = result.toUpperCase(); 
}

function flipCoin() {
    if (isAnimating) {
        return;
    }
    isAnimating = true;
    
    const random = Math.random();
    const result = random < 0.5 ? "heads" : "tails";
    coin.classList.remove("animate-heads", "animate-tails");
    
    setTimeout(() => {
        
        coin.setAttribute("class", "animate-" + result);
        
        setTimeout(() => {
            processResult(result);
            isAnimating = false;
        }, 4000);
        
    }, 100);
}
button.addEventListener("click", flipCoin);
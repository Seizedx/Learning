const container = document.getElementById("keyContainer");

container.innerHTML = generateHTML ("-", "-", "-");


window.addEventListener("keydown", (e) => {
    container.innerHTML = generateHTML(e.key, e.code, e.key.charCodeAt(0));
});

function generateHTML(key, code, keyCode) {
    return `
        <div class="key-container">
            <h3 class="animation">Key</h3>
            <div class="key-content">
                ${key === " " ? "Space" : key}
            </div>
        </div>
        
        <div class="key-container">
            <h3 class="animation">Key</h3>
            <div class="key-content">
                ${code}
            </div>
        </div>

        <div class="key-container">
            <h3 class="animation">Key Code</h3>
            <div class="key-content">
                ${keyCode}
            </div>
        </div>        
    `; 
}

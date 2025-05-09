const container = document.querySelector(".container");
const body = document.querySelector("body");

function dropped() {
    const drop = document.createElement("span");
    drop.classList.add("drop");
    
    function color() {
        const r = Math.floor(Math.random() * 256); // Vermelho (0-255)
        const g = Math.floor(Math.random() * 256); // Verde (0-255)
        const b = Math.floor(Math.random() * 256); // Azul (0-255)
        drop.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };
    
    setInterval(color, 300);

    function colorBody() {
        const r = Math.floor(Math.random() * 256); // Vermelho (0-255)
        const g = Math.floor(Math.random() * 256); // Verde (0-255)
        const b = Math.floor(Math.random() * 256); // Azul (0-255)
        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };
    
    setInterval(colorBody, 300);
    
    function transform() {
        
        const rotate = Math.floor(Math.random() * 360); // rotate
        const scale = Math.floor(Math.random() * 7); //scale
        drop.style.transform = `scale(${scale}) rotate(${rotate}deg)`;   
    };
    setInterval(transform, 500);

    container.appendChild(drop);

    
    drop.style.top = Math.random() * innerHeight + "px";
    drop.style.left = Math.random() * innerWidth + "px";

    setTimeout(() => {
          drop.remove();
    }, 4000);
  

}
setInterval(dropped, 1);
setInterval(dropped, 1);
setInterval(dropped, 1);
setInterval(dropped, 1);
setInterval(dropped, 1);
setInterval(dropped, 1);
setInterval(dropped, 1);
setInterval(dropped, 1);

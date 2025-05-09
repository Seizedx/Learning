let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Mine", "Yours", "Somebody"];

let colors = [
    "#A3D7B2", "#F47C91", "#6B2E9C", "#E8A531", "#1C5F78", "#D93A6E", "#4B8CF0",
    "#9E2D4A", "#3FC7A5", "#B56E29", "#7A91D0", "#F1C43B", "#2E7B5A", "#C6198F",
    "#5AD3E2", "#8F3C1B", "#E76FB4", "#3269A8", "#B9E04D", "#6D4E97", "#F89B2C",
    "#1A8C3F", "#D571A2", "#4C9F67", "#E23D55", "#7FC9B8", "#A52F7E", "#3B6ED9"
  ];

  let sticker = function (name) {

    let div = template.content.querySelector("div");
    let nameOfSticker = div.querySelector(".name");

    nameOfSticker.innerHTML = name;
    
    div.style.background = colors[Math.floor(Math.random() * colors.length)];
    div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    let node = document.importNode(div,true);
    wrapper.appendChild(node); 
  }

  setTimeout(refreshPage, 1000);
  function refreshPage() {
    location.reload();
  }

  names.forEach(sticker);


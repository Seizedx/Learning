console.log("script.js is working");

function detectChar() {
    const input = document.getElementById("inputType").value;

    if(input) {
        const unicodeValue = input.charCodeAt(0);
        const result = `The Unicode Value of "${input}" is ${unicodeValue}`;

        document.getElementById("result").textContent = result;
    }else{
        document.getElementById("result").textContent = "Please Enter a Character!";
    }

    inputType.value = "";
}
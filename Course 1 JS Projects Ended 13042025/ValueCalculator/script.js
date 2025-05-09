document.getElementById("calculateButton").addEventListener("click", calculateFn);
const selector = document.getElementById("calculateSelector");

selector.addEventListener("change", function() {
    const valueShown = selector.value;
    console.log(valueShown);
        result.style.display = "none";
});

function calculateFn () {
    const a = document.getElementById("varA");
    const b = document.getElementById("varB");
    const calculateSelector = document.getElementById("calculateSelector");
    const selected = calculateSelector.value;


    let resultItem;

    if (isNaN(a.value) || isNaN(b.value) || a.value === "" || b.value === "") {
        alert("Invalid Values!");
        a.value = "";
        b.value = "";
        return;
    }

    if (selected === "equal") {
        if (a.value == b.value) {
            // alert("A is Equal to B!");
            resultItem = "A is Equal to B!"; 
        } else {
            // alert("A is Not Equal B!");
            resultItem = "A is Not Equal B!";
        }
    } 

    if (selected === "notEqual") {
        if (a.value !== b.value) {
            // alert("A is Not Equal to B!");
            resultItem = "A is Not Equal to B!";
        } else {
            // alert("A is Equal to B!");
            resultItem = "A is Equal to B!";
        }
    } 

    if (selected === "bigger") {
        if (a.value > b.value) {
            // alert("A is Bigger Than B!");
            resultItem = "A is Bigger Than B!";
        } else if (a.value == b.value) {
            // alert("A is Equal to B!");
            resultItem = "A is Equal to B!";
        } else {
            // alert("A is Not Bigger Than B!");
            resultItem = "A is Not Bigger Than B!";
        }
    } 

    if (selected === "smaller") {
        if (a.value < b.value) {
            // alert("A is Smaller Than B!");
            resultItem = "A is Smaller Than B!";
        } else if (a.value == b.value) {
            // alert("A is Equal to B!");
            resultItem = "A is Equal to B!";
        } else {
            // alert("A is Not Smaller Than B!");
            resultItem = "A is Not Smaller Than B!";
        }
    }
    const result = document.getElementById("result");

    result.innerHTML = `
    <div class="result-item">
    <h1>${resultItem}</h1>
    </div>
    `;
    result.style.display = "block";

}





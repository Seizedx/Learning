 console.log("script.js working");

 function calculateTip() {

    const billAmountInput = document.getElementById("billAmount");
    const serviceRatingSelect = document.getElementById("serviceRating");
    const splitCountType = document.getElementById("splitCount");
    const mealTypeSelect = document.getElementById("mealType");

    const tipAmountOutput = document.getElementById("tipAmount");
    const totalAmountOutput = document.getElementById("totalAmount");
    const amountPerPersonOutput = document.getElementById("amountPerPerson");

    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseFloat(serviceRatingSelect.value);
    const splitCount = parseInt(splitCountType.value);
    const mealType = mealTypeSelect.value;

    if(isNaN(billAmount)  ||  isNaN(serviceRating)  ||  isNaN(splitCount)) {
        tipAmountOutput.textContent = "Please Enter Valid Numbers";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
        return;
    }

    let tip;
        switch(serviceRating) {
            case 1:
                tip = billAmount * 0.05;
                break;
            case 2:
                tip = billAmount * 0.1;
                break;
            case 3:
                tip = billAmount * 0.15;
                break;
            case 4:
                tip = billAmount * 0.20;
                break;    
        }

        let totalAmount = billAmount + tip;
        let amountPerPerson = totalAmount / splitCount;

        if (mealType === "dinner" ){
            tip += 5;
            totalAmount += 5;
            amountPerPerson +=5;
        }

        tipAmountOutput.textContent = `Tip: $${tip.toFixed(2)}`;
        totalAmountOutput.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
        amountPerPersonOutput.textContent = `Amount Per Person: $${amountPerPerson.toFixed(2)}`;
 }

 const calculateButton = document.getElementById("calculateButton").addEventListener("click", calculateTip);


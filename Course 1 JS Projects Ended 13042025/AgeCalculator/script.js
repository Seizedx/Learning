console.log("script.js is working");

function calculateAge () {
    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdateParts = birthdateInput.split("-");

    const birthDay = birthdateParts[0];
    const birthMonth = birthdateParts[1] - 1;
    const birthYear = birthdateParts[2];

    const birthDate = new Date(birthYear, birthMonth, birthDay);

    const isValidDate = (date) => {
        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };

    if(!isValidDate(birthDate)) {
        alert("Invalid Date Format: Please, Enter a Valid Date in DD-MM-YYYY");
        return;
    }

    const ageInMilliSeconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliSeconds/1000);
    const ageInMinutes = Math.floor(ageInSeconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInDays/365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
    <div class="result-item">
    <h3>Age:</h3>
    <p>${ageInYears} Years ${ageInMonths % 12} month(s) ${ageInDays % 30} day(s).</p>
    </div>
        <div class="result-item">
    <h3>Months Passed:</h3>
    <p>${ageInMonths} Month(s).</p>
    </div>
        <div class="result-item">
    <h3>Weeks Passed:</h3>
    <p>${ageInWeeks} Weeks(s).</p>
    </div>
       <h3>Days Passed:</h3>
    <p>${ageInDays} Days(s).</p>
    </div>
           <h3>Hours Passed:</h3>
    <p>${ageInHours} Hour(s).</p>
    </div>
           <h3>Minutes Passed:</h3>
    <p>${ageInMinutes} Minute(s).</p>
    </div>
           <h3>Seconds Passed:</h3>
    <p>${ageInSeconds} Seconds.</p>
    </div>
               <h3>Milliseconds Passed:</h3>
    <p>${ageInMilliSeconds} milliseconds.</p>
    </div>
    `;
    

    resultContainer.style.display = "block";
}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=> {
    event.preventDefault();
    setInterval(calculateAge, 100);
});
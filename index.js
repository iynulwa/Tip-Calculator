let billValue = 0;
let peopleValue = 1;
let tipPercentage = 0;

// Store bill input value
const bill = document.getElementById('bill');
bill.addEventListener("change", billing);
function billing() {
    billValue = parseFloat(this.value);
    calculation();
};

//Store percentage value (custom)
const custom = document.getElementById("custom");
custom.addEventListener("change", function() {
    tipPercentage = parseFloat(this.value/100);
    calculation();
});

// Store percentage value (btn)
const buttons = document.querySelectorAll("#btns button");
Array.from(buttons).forEach(percent);

function percent(event) {
    event.addEventListener("click", function(e) {
        tipPercentage = parseFloat(e.target.dataset.value);
        calculation();
    });
};

// Store people input value
const people = document.getElementById("People");
people.addEventListener("change", function() {
    peopleValue = parseInt(this.value);
    calculation();
});

// Get output elements
const eachPerson = document.getElementById("each");
const totalTip = document.getElementById("total");

// Get error message
const errorMessage = document.querySelector(".error");

//calculation
function calculation() {

    if (billValue > 0 && tipPercentage > 0 && peopleValue > 0) {
        const tipAmount = (billValue * tipPercentage) / peopleValue;
        const totalPerPerson = (billValue + tipAmount) / peopleValue;
        eachPerson.innerText = tipAmount.toFixed(2);
        totalTip.innerText = totalPerPerson.toFixed(2);
    }

    if (peopleValue <= 0) {
        errorMessage.style.visibility = "visible";
        people.style.outline = '2px solid red';
        eachPerson.innerText = "0.00";
        totalTip.innerText = "0.00";
        return;
    } else {
        errorMessage.style.visibility = "hidden";
        people.style.outline = 'none';
    }

    if (eachPerson.innerText !== "0.00" || totalTip.innerText !== "0.00") {
        resetBtn.disabled = false;
    } else {
        resetBtn.disabled = true;
    }
}


// Reset button
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", function () {

    bill.value = "";
    people.value = "";
    custom.value = "";

    billValue = 0;
    peopleValue = 0;
    tipPercentage = 0;

    eachPerson.innerText = "0.00";
    totalTip.innerText = "0.00";

    errorMessage.style.visibility = "hidden";

    people.style.outline = "none";
});

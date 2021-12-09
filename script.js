let bill;
let tip;
let numberOfPeople;

document.getElementById("reset-btn").disabled = true;

function calculateAll(bill, tip, numberOfPeople) {
    if (typeof bill == "number" && typeof tip == "number" && typeof numberOfPeople == "number") {
        let totalTip = bill * tip / 100;
        let tipPerPerson = totalTip / numberOfPeople;
        document.getElementById("tip-per-person").innerHTML = `$${Math.round(tipPerPerson * 100) / 100}`;
        document.getElementById("total-per-person").innerHTML = `$${Math.round((bill + totalTip) / numberOfPeople * 100) / 100}`;
    }

    if (numberOfPeople == 0) {
        document.getElementById("tip-per-person").innerHTML = "$0.00";
        document.getElementById("total-per-person").innerHTML = "$0.00";
        document.getElementById("number-of-people").style.outlineColor = "#B57B6D";
    } else {
        document.getElementById("number-of-people").style.outlineColor = "hsl(173, 61%, 77%)";
    }
}

function saveTipValue(value, placeholder) {
    document.getElementById("reset-btn").disabled = false;
    tip = Number(value);
    if (placeholder !== "Custom") {
        document.getElementById("custom-pcent").value = "";
    }
    calculateAll(bill, tip, numberOfPeople);
}

function uncheckRadioInputs() {
    let btns = document.getElementsByName("tip-pcent");
    for (var i = 0; i < btns.length; i++) {
        btns[i].checked = false;
    }
}

function saveBill(value) {
    document.getElementById("reset-btn").disabled = false;
    bill = Number(value);
    calculateAll(bill, tip, numberOfPeople);
}

function saveNumberOfPeople(value) {
    document.getElementById("reset-btn").disabled = false;
    numberOfPeople = Number(value);
    let errorMessage = document.getElementById("error-message");
    if (numberOfPeople == 0) {
        errorMessage.style.visibility = "visible";
    } else {
        errorMessage.style.visibility = "hidden";
    }
    calculateAll(bill, tip, numberOfPeople);
}

function resetAll() {
    bill = undefined;
    tip = undefined;
    numberOfPeople = undefined;
    uncheckRadioInputs();
    var inputs = document.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].type.toLowerCase() == 'number') {
            inputs[i].value = "";
        }
    }
    document.getElementById("tip-per-person").innerHTML = "$0.00";
    document.getElementById("total-per-person").innerHTML = "$0.00";
    document.getElementById("error-message").style.visibility = "hidden";
    document.getElementById("reset-btn").disabled = true;
}
const BASE_URL = "https://v6.exchangerate-api.com/v6/2cf8a96ccc1eff3a5228bc01/latest/";  //https://v6.exchangerate-api.com/v6/2cf8a96ccc1eff3a5228bc01/latest/USD

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdown lists
for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.appendChild(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const fromCurrency = fromCurr.value.toUpperCase();
    //console.log(fromCurrency);
    const toCurrency = toCurr.value.toUpperCase();

    // Fetch exchange rates for selected currencies
    let response = await fetch(`${BASE_URL}${fromCurrency}`);
    let data = await response.json();

    if (data.result !== 'success') {
        msg.innerText = "Failed to fetch exchange rates.";
        return;
    }

    let rate = data.conversion_rates[toCurrency];
    if (!rate) {
        msg.innerText = "Conversion rate not available for selected currencies.";
        return;
    }

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurrency} = ${finalAmount.toFixed(2)} ${toCurrency}`;
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    //console.log(countryCode);
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});

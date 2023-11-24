// hardcoded exchange rates
const exchangeRates = {
    usd: {
        cad: 1.25
    },
    cad: {
        usd: 0.8
    }
};


// function to convert currency
function convertCurrency() {
    // get values from HTML elements
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // data validation
    if (isNaN(amount) || amount <= 0) {
        // display an alert if the entered amount is not valid
        alert('Please enter a valid amount.');
        return;
    }

    // check if the selected currencies and exchange rates are valid
    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        // display an alert for invalid currency selection
        alert('Invalid currency selection.');
        return;
    }

    // calculate the converted amount
    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];

    // display the result in the HTML element with the id 'result'
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${amount.toFixed(3)} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(3)} ${toCurrency.toUpperCase()}`;
}

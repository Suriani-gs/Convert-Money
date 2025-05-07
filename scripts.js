
const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace("R$", "").replace(".", "").replace(",", "."));
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    
    const dolarToday = 5.2;
    const euroToday = 6.2;
    const libraToday = 7.63;
    const bitcoinToday = 549.448;

    // Atualiza o valor a ser convertido
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    // Conversão para a moeda selecionada
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);

    } else if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);

    } else if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);

    } else if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday);
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";

    } else if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";

    } else if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";

    } else if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    convertValues(); // Chama a função de conversão ao mudar a moeda
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);


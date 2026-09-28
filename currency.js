/**
 * USD to CAD Currency Converter
 * Author: Harderick Dhillon
 * Date: 09/25/2026
 *
 * Description: Converts between US Dollars (USD) and Canadian Dollars (CAD), supporting both single values and comma-separated lists of values.
 */
// Higher-order function: takes a from/to unit pair and returns an arrow-function
// converter. The returned converter accepts a single number or an array of
// numbers and returns the converted value(s) in the same shape.
const createCurrencyConverter = (fromUnit, toUnit) => {
    const factor = fromUnit === "usd" && toUnit === "cad" ? 1.4147
        : fromUnit === "cad" && toUnit === "usd" ? 1 / 1.4147
            : 1;
    return (value) => Array.isArray(value) ? value.map((entry) => entry * factor) : value * factor;
};
const usdToCad = createCurrencyConverter("usd", "cad");
const cadToUsd = createCurrencyConverter("cad", "usd");
const currencyDirection = document.getElementById("currency-direction");
const currencyInput = document.getElementById("currency-input");
const currencyInputLabel = document.getElementById("currency-input-label");
const currencyButton = document.getElementById("currency-button");
const currencyResult = document.getElementById("currency-result");
const currencyResultLabel = document.getElementById("currency-result-label");
// Parses "5" into a single number, or "1, 2.5, 10" into an array of numbers.
const parseValues = (raw) => {
    const parts = raw.split(",").map((part) => Number(part.trim()));
    return parts.length === 1 ? parts[0] : parts;
};
const formatValues = (value) => Array.isArray(value) ? value.map((entry) => entry.toFixed(2)).join(", ") : value.toFixed(2);
const handleCurrencyConvert = () => {
    const values = parseValues(currencyInput.value);
    const convert = currencyDirection.value === "usd-to-cad" ? usdToCad : cadToUsd;
    currencyResult.textContent = formatValues(convert(values));
};
const handleCurrencyDirectionChange = () => {
    const isUsdToCad = currencyDirection.value === "usd-to-cad";
    currencyInputLabel.textContent = isUsdToCad ? "US Dollars:" : "Canadian Dollars:";
    currencyResultLabel.textContent = isUsdToCad ? "Canadian Dollars:" : "US Dollars:";
    handleCurrencyConvert();
};
currencyButton.addEventListener("click", handleCurrencyConvert);
currencyDirection.addEventListener("change", handleCurrencyDirectionChange);
// This handles the dark mode toggle functionality, storing the user's preference in localStorage and applying it on page load.
const darkModeToggle = document.getElementById("dark-mode-toggle");
const applyDarkMode = (isDark) => {
    document.documentElement.classList.toggle("dark", isDark);
    darkModeToggle.checked = isDark;
    localStorage.setItem("dark-mode", String(isDark));
};
applyDarkMode(localStorage.getItem("dark-mode") === "true");
darkModeToggle.addEventListener("change", () => {
    applyDarkMode(darkModeToggle.checked);
});
export {};
//# sourceMappingURL=currency.js.map
const usdToCad = (usd) => usd * 1.4147;
const cadToUsd = (cad) => cad / 1.4147;
const currencyDirection = document.getElementById("currency-direction");
const currencyInput = document.getElementById("currency-input");
const currencyInputLabel = document.getElementById("currency-input-label");
const currencyButton = document.getElementById("currency-button");
const currencyResult = document.getElementById("currency-result");
const currencyResultLabel = document.getElementById("currency-result-label");
const handleCurrencyConvert = () => {
    const amount = Number(currencyInput.value);
    const result = currencyDirection.value === "usd-to-cad" ? usdToCad(amount) : cadToUsd(amount);
    currencyResult.textContent = result.toFixed(2);
};
const handleCurrencyDirectionChange = () => {
    const isUsdToCad = currencyDirection.value === "usd-to-cad";
    currencyInputLabel.textContent = isUsdToCad ? "US Dollars" : "Canadian Dollars";
    currencyResultLabel.textContent = isUsdToCad ? "Canadian Dollars" : "US Dollars";
    handleCurrencyConvert();
};
currencyButton.addEventListener("click", handleCurrencyConvert);
currencyDirection.addEventListener("change", handleCurrencyDirectionChange);
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
const usdToCad = (usd: number) => usd * 1.4147;
const cadToUsd = (cad: number) => cad / 1.4147;

const currencyDirection = document.getElementById("currency-direction") as HTMLSelectElement;
const currencyInput = document.getElementById("currency-input") as HTMLInputElement;
const currencyInputLabel = document.getElementById("currency-input-label") as HTMLLabelElement;
const currencyButton = document.getElementById("currency-button") as HTMLButtonElement;
const currencyResult = document.getElementById("currency-result") as HTMLParagraphElement;
const currencyResultLabel = document.getElementById("currency-result-label") as HTMLParagraphElement;

const handleCurrencyConvert = (): void => {
  const amount: number = Number(currencyInput.value);
  const result: number =
    currencyDirection.value === "usd-to-cad" ? usdToCad(amount) : cadToUsd(amount);
  currencyResult.textContent = result.toFixed(2);
};

const handleCurrencyDirectionChange = (): void => {
  const isUsdToCad = currencyDirection.value === "usd-to-cad";
  currencyInputLabel.textContent = isUsdToCad ? "US Dollars" : "Canadian Dollars";
  currencyResultLabel.textContent = isUsdToCad ? "Canadian Dollars" : "US Dollars";
  handleCurrencyConvert();
};

currencyButton.addEventListener("click", handleCurrencyConvert);
currencyDirection.addEventListener("change", handleCurrencyDirectionChange);

const darkModeToggle = document.getElementById("dark-mode-toggle") as HTMLInputElement;

const applyDarkMode = (isDark: boolean): void => {
  document.documentElement.classList.toggle("dark", isDark);
  darkModeToggle.checked = isDark;
  localStorage.setItem("dark-mode", String(isDark));
};

applyDarkMode(localStorage.getItem("dark-mode") === "true");

darkModeToggle.addEventListener("change", () => {
  applyDarkMode(darkModeToggle.checked);
});

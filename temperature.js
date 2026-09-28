const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const temperatureInput = document.getElementById("temperature-input");
const temperatureDirection = document.getElementById("temperature-direction");
const temperatureButton = document.getElementById("temperature-button");
const temperatureResult = document.getElementById("temperature-result");
const temperatureResultLabel = document.getElementById("temperature-result-label");
const temperatureInputLabel = document.getElementById("temperature-input-label");
// Parses "5" into a single number, or "1, 2.5, 10" into an array of numbers.
const parseValues = (raw) => {
    const parts = raw.split(",").map((part) => Number(part.trim()));
    return parts.length === 1 ? parts[0] : parts;
};
const formatValues = (value) => Array.isArray(value) ? value.map((entry) => entry.toFixed(2)).join(", ") : value.toFixed(2);
const handleTempConvert = () => {
    const values = parseValues(temperatureInput.value);
    const convert = temperatureDirection.value === "celsius-to-fahrenheit" ? celsiusToFahrenheit : fahrenheitToCelsius;
    const converted = Array.isArray(values) ? values.map(convert) : convert(values);
    temperatureResult.textContent = formatValues(converted);
};
const handleTempDirectionChange = () => {
    const isCelsiusToFahrenheit = temperatureDirection.value === "celsius-to-fahrenheit";
    temperatureInputLabel.textContent = isCelsiusToFahrenheit ? "Celsius:" : "Fahrenheit:";
    temperatureResultLabel.textContent = isCelsiusToFahrenheit ? "Fahrenheit:" : "Celsius:";
    handleTempConvert();
};
temperatureDirection.addEventListener("change", handleTempDirectionChange);
temperatureButton.addEventListener("click", handleTempConvert);
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
//# sourceMappingURL=temperature.js.map
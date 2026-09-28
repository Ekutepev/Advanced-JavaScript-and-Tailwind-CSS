const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const temperatureInput = document.getElementById("temperature-input");
const temperatureDirection = document.getElementById("temperature-direction");
const temperatureButton = document.getElementById("temperature-button");
const temperatureResult = document.getElementById("temperature-result");
const temperatureResultLabel = document.getElementById("temperature-result-label");
const temperatureInputLabel = document.getElementById("temperature-input-label");
const handleTempConvert = () => {
    const temperature = Number(temperatureInput.value);
    const converted = temperatureDirection.value === "celsius-to-fahrenheit" ? celsiusToFahrenheit(temperature) : fahrenheitToCelsius(temperature);
    temperatureResult.textContent = converted.toFixed(2);
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
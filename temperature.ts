type TemperatureUnit = "celsius" | "fahrenheit";

type TemperatureConverter = {
    (value: number): number;
    (value: number[]): number[];
};

const createTemperatureConverter = (fromUnit: TemperatureUnit, toUnit: TemperatureUnit): TemperatureConverter => {
    const formula: (temp: number) => number =
        fromUnit === "celsius" && toUnit === "fahrenheit" ? (c) => (c * 9) / 5 + 32
        : fromUnit === "fahrenheit" && toUnit === "celsius" ? (f) => ((f - 32) * 5) / 9
        : (t) => t;

    return ((value: number | number[]) =>
        Array.isArray(value) ? value.map((entry) => formula(entry)) : formula(value)) as TemperatureConverter;
};

const celsiusToFahrenheit = createTemperatureConverter("celsius", "fahrenheit");
const fahrenheitToCelsius = createTemperatureConverter("fahrenheit", "celsius");

const temperatureInput = document.getElementById("temperature-input") as HTMLInputElement;
const temperatureDirection = document.getElementById("temperature-direction") as HTMLSelectElement;
const temperatureButton = document.getElementById("temperature-button") as HTMLButtonElement;
const temperatureResult = document.getElementById("temperature-result") as HTMLParagraphElement;
const temperatureResultLabel = document.getElementById("temperature-result-label") as HTMLParagraphElement;
const temperatureInputLabel = document.getElementById("temperature-input-label") as HTMLLabelElement;

const handleTempConvert = (): void => {
    const temperature: number = Number(temperatureInput.value);
    const converted: number = temperatureDirection.value === "celsius-to-fahrenheit" ? celsiusToFahrenheit(temperature) : fahrenheitToCelsius(temperature);
    temperatureResult.textContent = converted.toFixed(2);
};

const handleTempDirectionChange = (): void => {
    const isCelsiusToFahrenheit = temperatureDirection.value === "celsius-to-fahrenheit";
    temperatureInputLabel.textContent = isCelsiusToFahrenheit ? "Celsius:" : "Fahrenheit:";
    temperatureResultLabel.textContent = isCelsiusToFahrenheit ? "Fahrenheit:" : "Celsius:";
    handleTempConvert();
};

temperatureDirection.addEventListener("change", handleTempDirectionChange);
temperatureButton.addEventListener("click", handleTempConvert);

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

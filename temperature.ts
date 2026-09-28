type TemperatureUnit = "celsius" | "fahrenheit";

type TemperatureConverter = {
    (value: number): number;
    (value: number[]): number[];
    (value: number | number[]): number | number[];
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

// Parses "5" into a single number, or "1, 2.5, 10" into an array of numbers.
const parseValues = (raw: string): number | number[] => {
    const parts = raw.split(",").map((part) => Number(part.trim()));
    return parts.length === 1 ? parts[0]! : parts;
};

const formatValues = (value: number | number[]): string =>
    Array.isArray(value) ? value.map((entry) => entry.toFixed(2)).join(", ") : value.toFixed(2);

const handleTempConvert = (): void => {
    const values = parseValues(temperatureInput.value);
    const convert = temperatureDirection.value === "celsius-to-fahrenheit" ? celsiusToFahrenheit : fahrenheitToCelsius;
    const converted = convert(values);
    temperatureResult.textContent = formatValues(converted);
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

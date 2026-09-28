/**
 * Distance Converter
 * Author: Evgeny Kutepov
 * Date: 09/27/2026
 *
 * Description: Converts distances between miles and kilometers, supporting both single values and comma-separated lists of values.
 */
const createDistanceConverter = (fromUnit, toUnit) => {
    const factor = fromUnit === "mi" && toUnit === "km" ? 1.60934
        : fromUnit === "km" && toUnit === "mi" ? 0.621371
            : 1;
    return (value) => Array.isArray(value) ? value.map((v) => v * factor) : value * factor;
};
const milesToKilometers = createDistanceConverter("mi", "km");
const kilometersToMiles = createDistanceConverter("km", "mi");
const distanceInput = document.getElementById("distance-input");
const distanceDirection = document.getElementById("distance-direction");
const distanceButton = document.getElementById("distance-button");
const distanceResult = document.getElementById("distance-result");
const distanceResultLabel = document.getElementById("distance-result-label");
const distanceInputLabel = document.getElementById("distance-input-label");
const parseUnits = (value) => {
    const values = value.split(",").map((v) => parseFloat(v.trim()));
    return values.length === 1 ? values[0] : values;
};
const formatUnits = (value) => Array.isArray(value) ? value.map(v => v.toFixed(2)).join(", ") : value.toFixed(2);
const handledistanceConvert = () => {
    const inputValue = parseUnits(distanceInput.value);
    const convert = distanceDirection.value === "miles-to-kilometers" ? milesToKilometers : kilometersToMiles;
    distanceResult.textContent = formatUnits(convert(inputValue));
};
const handleDistanceDirectionChange = () => {
    const isMilesToKilometers = distanceDirection.value === "miles-to-kilometers";
    distanceInputLabel.textContent = isMilesToKilometers ? "Miles:" : "Kilometers:";
    distanceResultLabel.textContent = isMilesToKilometers ? "Kilometers:" : "Miles:";
    handledistanceConvert();
};
distanceDirection.addEventListener("change", handleDistanceDirectionChange);
distanceButton.addEventListener("click", handledistanceConvert);
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
//# sourceMappingURL=distance.js.map
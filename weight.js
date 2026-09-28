/**
 * Weight Converter
 * Author: Isaac Jenkins
 * Date: 2026-09-27
 *
 * Description: Implements the Weight tab of the unit converter. Defines a higher-order
 * function, createWeightConverter, that takes a source unit and target unit (kg or lb)
 * and returns an arrow-function converter for that direction.
 * Inputs: a single numeric value or a comma-separated list of numbers typed into the
 * weight form, plus the selected conversion direction (kg-to-lb or lb-to-kg).
 * Processing: the raw input is parsed into a number or an array of numbers, then each
 * value is multiplied by the conversion factor for the chosen direction.
 * Outputs: the converted value or list of values, formatted to two decimal places and
 * shown in the result box; also applies and remembers the page's dark mode setting.
 */
// Higher-order function: takes a from/to unit pair and returns an arrow-function
// converter. The returned converter accepts a single number or an array of
// numbers and returns the converted value(s) in the same shape.
const createWeightConverter = (fromUnit, toUnit) => {
    const factor = fromUnit === "kg" && toUnit === "lb" ? 2.20462
        : fromUnit === "lb" && toUnit === "kg" ? 1 / 2.20462
            : 1;
    return (value) => Array.isArray(value) ? value.map((entry) => entry * factor) : value * factor;
};
const kgToLb = createWeightConverter("kg", "lb");
const lbToKg = createWeightConverter("lb", "kg");
const weightDirection = document.getElementById("weight-direction");
const weightInput = document.getElementById("weight-input");
const weightInputLabel = document.getElementById("weight-input-label");
const weightButton = document.getElementById("weight-button");
const weightResult = document.getElementById("weight-result");
const weightResultLabel = document.getElementById("weight-result-label");
// Parses "5" into a single number, or "1, 2.5, 10" into an array of numbers.
const parseValues = (raw) => {
    const parts = raw.split(",").map((part) => Number(part.trim()));
    return parts.length === 1 ? parts[0] : parts;
};
const formatValues = (value) => Array.isArray(value) ? value.map((entry) => entry.toFixed(2)).join(", ") : value.toFixed(2);
const handleWeightConvert = () => {
    const values = parseValues(weightInput.value);
    const convert = weightDirection.value === "kg-to-lb" ? kgToLb : lbToKg;
    weightResult.textContent = formatValues(convert(values));
};
const handleWeightDirectionChange = () => {
    const isKgToLb = weightDirection.value === "kg-to-lb";
    weightInputLabel.textContent = isKgToLb ? "Kilograms" : "Pounds";
    weightResultLabel.textContent = isKgToLb ? "Pounds" : "Kilograms";
    handleWeightConvert();
};
weightDirection.addEventListener("change", handleWeightDirectionChange);
weightButton.addEventListener("click", handleWeightConvert);
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
//# sourceMappingURL=weight.js.map
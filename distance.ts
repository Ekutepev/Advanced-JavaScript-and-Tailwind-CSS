/**
 * Distance Converter
 * Author: Evgeny Kutepov
 * Date: 09/27/2026
 * 
 * Description: Converts distances between miles and kilometers, supporting both single values and comma-separated lists of values.
 */

type distanceUnit = "mi" | "km";

const createDistanceConverter = (fromUnit: distanceUnit, toUnit: distanceUnit) => {
    const factor =
        fromUnit === "mi" && toUnit === "km" ? 1.60934
            : fromUnit === "km" && toUnit === "mi" ? 0.621371
                : 1;

    return (value: number | number[]): number | number[] =>
        Array.isArray(value) ? value.map((v) => v * factor) : value * factor;
};


const milesToKilometers = createDistanceConverter("mi", "km");
const kilometersToMiles = createDistanceConverter("km", "mi");

const distanceInput = document.getElementById("distance-input") as HTMLInputElement;
const distanceDirection = document.getElementById("distance-direction") as HTMLSelectElement;
const distanceButton = document.getElementById("distance-button") as HTMLButtonElement;
const distanceResult = document.getElementById("distance-result") as HTMLParagraphElement;
const distanceResultLabel = document.getElementById("distance-result-label") as HTMLParagraphElement;
const distanceInputLabel = document.getElementById("distance-input-label") as HTMLLabelElement;

const parseUnits = (value: string): number | number[] => {
    const values = value.split(",").map((v) => parseFloat(v.trim()));
    return values.length === 1 ? values[0]! : values;
};

const formatUnits = (value: number | number[]): string =>
    Array.isArray(value) ? value.map(v => v.toFixed(2)).join(", ") : value.toFixed(2);


const handledistanceConvert = (): void => {
    const inputValue = parseUnits(distanceInput.value);
    const convert = distanceDirection.value === "miles-to-kilometers" ? milesToKilometers : kilometersToMiles;
    distanceResult.textContent = formatUnits(convert(inputValue));
};

const handleDistanceDirectionChange = (): void => {
    const isMilesToKilometers = distanceDirection.value === "miles-to-kilometers";
    distanceInputLabel.textContent = isMilesToKilometers ? "Miles:" : "Kilometers:";
    distanceResultLabel.textContent = isMilesToKilometers ? "Kilometers:" : "Miles:";
    handledistanceConvert();
};

distanceDirection.addEventListener("change", handleDistanceDirectionChange);
distanceButton.addEventListener("click", handledistanceConvert);

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

const milesToKilometers = (miles) => miles * 1.60934;
const kilometersToMiles = (kilometers) => kilometers / 1.60934;
const distanceInput = document.getElementById("distance-input");
const distanceDirection = document.getElementById("distance-direction");
const distanceButton = document.getElementById("distance-button");
const distanceResult = document.getElementById("distance-result");
const distanceResultLabel = document.getElementById("distance-result-label");
const distanceInputLabel = document.getElementById("distance-input-label");
const handledistanceConvert = () => {
    const miles = Number(distanceInput.value);
    const kilometers = distanceDirection.value === "miles-to-kilometers" ? milesToKilometers(miles) : kilometersToMiles(miles);
    distanceResult.textContent = kilometers.toFixed(2);
};
const handleDistanceDirectionChange = () => {
    const isMilesToKilometers = distanceDirection.value === "miles-to-kilometers";
    distanceInputLabel.textContent = isMilesToKilometers ? "Miles:" : "Kilometers:";
    distanceResultLabel.textContent = isMilesToKilometers ? "Kilometers:" : "Miles:";
    handledistanceConvert();
};
distanceDirection.addEventListener("change", handleDistanceDirectionChange);
distanceButton.addEventListener("click", handledistanceConvert);
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
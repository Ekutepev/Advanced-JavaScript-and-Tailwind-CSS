const milesToKilometers = (miles: number) => miles * 1.60934;
const kilometersToMiles = (kilometers: number) => kilometers / 1.60934;

const distanceInput = document.getElementById("distance-input") as HTMLInputElement;
const distanceDirection = document.getElementById("distance-direction") as HTMLSelectElement;
const distanceButton = document.getElementById("distance-button") as HTMLButtonElement;
const distanceResult = document.getElementById("distance-result") as HTMLParagraphElement;
const distanceResultLabel = document.getElementById("distance-result-label") as HTMLParagraphElement;
const distanceInputLabel = document.getElementById("distance-input-label") as HTMLLabelElement;

const handledistanceConvert = (): void => {
    const miles: number = Number(distanceInput.value);
    const kilometers: number = distanceDirection.value === "miles-to-kilometers" ? milesToKilometers(miles) : kilometersToMiles(miles);
    distanceResult.textContent = kilometers.toFixed(2);
};

const handleDistanceDirectionChange = (): void => {
    const isMilesToKilometers = distanceDirection.value === "miles-to-kilometers";
    distanceInputLabel.textContent = isMilesToKilometers ? "Miles:" : "Kilometers:";
    distanceResultLabel.textContent = isMilesToKilometers ? "Kilometers:" : "Miles:";
    handledistanceConvert();
};

distanceDirection.addEventListener("change", handleDistanceDirectionChange);
distanceButton.addEventListener("click", handledistanceConvert);



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

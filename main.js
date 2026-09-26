const KilogramToPound = (Kilograms) => Kilograms * 2.20462;
const milesToKilometers = (miles) => miles * 1.60934;
const litresToGallons = (litres) => litres * 0.264172;
const kgInput = document.getElementById("kg-input");
const kgButton = document.getElementById("kg-button");
const kgResult = document.getElementById("kg-result");
const handleKgConvert = () => {
    const kilograms = Number(kgInput.value);
    const pounds = KilogramToPound(kilograms);
    kgResult.textContent = pounds.toFixed(2);
};
kgButton.addEventListener("click", handleKgConvert);
const milesInput = document.getElementById("miles-input");
const milesButton = document.getElementById("miles-button");
const milesResult = document.getElementById("miles-result");
const handleMilesConvert = () => {
    const miles = Number(milesInput.value);
    const kilometers = milesToKilometers(miles);
    milesResult.textContent = kilometers.toFixed(2);
};
milesButton.addEventListener("click", handleMilesConvert);
const litresInput = document.getElementById("litres-input");
const litresButton = document.getElementById("litres-button");
const litresResult = document.getElementById("litres-result");
const handleLitresConvert = () => {
    const litres = Number(litresInput.value);
    const gallons = litresToGallons(litres);
    litresResult.textContent = gallons.toFixed(2);
};
litresButton.addEventListener("click", handleLitresConvert);
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
//# sourceMappingURL=main.js.map
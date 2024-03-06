let originalWeightInput = document.getElementById("originalWeight");
let originalUnitSelect = document.getElementById("originalUnit");
let decimalPrecisionInput = document.getElementById("decimalPrecision");
let convertBtn = document.getElementById("convertBtn");
let clearBtn = document.getElementById("clearBtn");
let convertedWeightSpan = document.getElementById("convertedWeight");
let convertedUnitSelect = document.getElementById("convertedUnit");

function convertWeight() {
    
    const originalWeight = parseFloat(originalWeightInput.value);
    const originalUnit = originalUnitSelect.value;
    const targetUnit = convertedUnitSelect.value;
    const decimalPrecision = parseInt(decimalPrecisionInput.value);

    if (isNaN(originalWeight)) {
        errorMessage.textContent = "Please enter a valid weight.";
        return;
    }
    const convertedWeight = performConversion(originalWeight, originalUnit, targetUnit);
    
    convertedWeightSpan.textContent = convertedWeight.toFixed(decimalPrecision);
}
function clearFields() {
    originalWeightInput.value = "";
    originalUnitSelect.value = "kg";
    decimalPrecisionInput.value = "2";
    convertedWeightSpan.textContent = "0";
    convertedUnitSelect.value = "kg";
    errorMessage.textContent = "";
}
function performConversion(weight, fromUnit, toUnit) {
    const conversionFactors = {
        kg: { g: 1000, lbs: 2.20462, oz: 35.274 },
        g: { kg: 0.001, lbs: 0.00220462, oz: 0.035274 },
        lbs: { kg: 0.453592, g: 453.592, oz: 16 },
        oz: { kg: 0.0283495, g: 28.3495, lbs: 0.0625 }
    };

    return weight * conversionFactors[fromUnit][toUnit];
}
convertBtn.addEventListener("click", convertWeight);
clearBtn.addEventListener("click", clearFields);
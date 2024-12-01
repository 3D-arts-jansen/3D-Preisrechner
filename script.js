
function calculatePrice() {
    const filamentWeight = parseFloat(document.getElementById('filament-weight').value);
    const filamentCost = parseFloat(document.getElementById('filament-cost').value);
    const printTime = parseFloat(document.getElementById('print-time').value);
    const powerUsage = parseFloat(document.getElementById('power-usage').value);
    const electricityCost = parseFloat(document.getElementById('electricity-cost').value);
    const machineDepreciation = parseFloat(document.getElementById('machine-depreciation').value);
    const laborTime = parseFloat(document.getElementById('labor-time').value);
    const laborRate = parseFloat(document.getElementById('labor-rate').value);
    const fixedCosts = parseFloat(document.getElementById('fixed-costs').value);
    const projectsPerMonth = parseInt(document.getElementById('projects-per-month').value);
    const additionalCosts = parseFloat(document.getElementById('additional-costs').value);
    const profitMargin = parseFloat(document.getElementById('profit-margin').value) / 100;

    const materialCost = (filamentWeight / 1000) * filamentCost;
    const machineCost = (powerUsage * electricityCost * printTime) + (machineDepreciation * printTime);
    const laborCost = laborTime * laborRate;
    const fixedCostShare = fixedCosts / projectsPerMonth;
    const totalCost = materialCost + machineCost + laborCost + fixedCostShare + additionalCosts;
    const finalPrice = totalCost * (1 + profitMargin);

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h2>Ergebnis</h2>
        <p><strong>Materialkosten:</strong> €${materialCost.toFixed(2)}</p>
        <p><strong>Maschinenkosten:</strong> €${machineCost.toFixed(2)}</p>
        <p><strong>Arbeitskosten:</strong> €${laborCost.toFixed(2)}</p>
        <p><strong>Fixkostenanteil:</strong> €${fixedCostShare.toFixed(2)}</p>
        <p><strong>Zusatzkosten:</strong> €${additionalCosts.toFixed(2)}</p>
        <p><strong>Gesamtkosten:</strong> €${totalCost.toFixed(2)}</p>
        <p><strong>Endpreis (inkl. Gewinnmarge):</strong> €${finalPrice.toFixed(2)}</p>
    `;
}

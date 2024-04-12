document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const petrolCostInput = document.getElementById('petrolCost');
    const litersInput = document.getElementById('liters');
    const totalCostDisplay = document.getElementById('totalCost');

    // Event listener for the Calculate button
    calculateBtn.addEventListener('click', function() {
        const petrolCost = parseFloat(petrolCostInput.value);
        const liters = parseFloat(litersInput.value);

        // Calculate total cost
        const totalCost = petrolCost * liters;

        // Display total cost
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});

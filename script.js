let totalEmissions = 0;

function addEmissions() {
    const activity = document.getElementById('activity').value;
    const emissions = parseFloat(document.getElementById('emissions').value);
    
    if (!isNaN(emissions)) {
        totalEmissions += emissions;
        
        const emissionsList = document.getElementById('emissionsList');
        const newEmission = document.createElement('div');
        newEmission.textContent = `${activity}: ${emissions.toFixed(2)} kg CO2`;
        emissionsList.appendChild(newEmission);
        
        document.getElementById('total').textContent = totalEmissions.toFixed(2);
        
        // Clear input fields
        document.getElementById('activity').value = '';
        document.getElementById('emissions').value = '';
    } else {
        alert('Please enter a valid number for emissions.');
    }
}

document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);
    const duration = parseFloat(document.getElementById('duration').value);

    if (isNaN(distance) || isNaN(duration) || distance <= 0 || duration <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const travelData = new TravelData(distance, duration);
    const averageSpeed = travelData.calculateAverageSpeed().toFixed(2);

    document.getElementById('result').innerText = `A velocidade média é ${averageSpeed} km/h`;
});
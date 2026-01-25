const temperature = document.getElementById('temperature').textContent;
const windSpeed = document.getElementById('wind-speed').textContent;
const windChill = document.getElementById('windChill');

const temperatureValue = temperature.match(/-?\d+\.?\d*/)[0];
const windSpeedValue = windSpeed.match(/-?\d+\.?\d*/)[0];

windChill.textContent = `${calculateWindChill(parseFloat(temperatureValue), parseFloat(windSpeedValue))}`;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    }
    else{
        return "N/A";
    }
}
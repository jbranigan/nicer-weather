var temps = document.getElementById('temp-data');
var tempHigh = temps.dataset.high;
var tempLow = temps.dataset.low;

document.body.style.backgroundImage = '-webkit-linear-gradient(top, ' +
    findTempColor(tempHigh) + ', ' + findTempColor(tempLow) + ')';

function findTempColor(temp) {
    if (temp < 0) { return '#c77ae7'; }
    else if (temp >= 0 && temp < 20) { return '#a27abf'; }
    else if (temp >= 20 && temp < 40) { return '#7a7aff'; }
    else if (temp >= 40 && temp < 60) { return '#7aff7a'; }
    else if (temp >= 60 && temp < 80) { return '#fff77a'; }
    else if (temp >= 80 && temp < 100) { return '#ffbc7a'; }
    else { return '#ff8484'; }
}
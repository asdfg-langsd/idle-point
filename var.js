let point = 0;
let pointPerClick = 1;
let pointPerSec = 0;
let objects = undefined;
fetch('./object.json').then(response => {
    return response.json();
}).then(data => objects = data)
let totalBoost = 0;
let totalMultiplier = 1;
let ppcTotalBoost = 0;
let ppcTotalMultiplier = 1;
let buyScale = 1
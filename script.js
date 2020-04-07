let startVS = moment('2016-10-14T20:56')
let nowDate = moment()


let monthsVS = nowDate.diff(startVS, 'month')
    let yaersVS = (monthsVS / 12) + 0.1; //nowDate.diff(startVS, 'year')
let daysVS = nowDate.diff(startVS, 'day')
let hoursVS = nowDate.diff(startVS, 'hours')
let minutesVS = nowDate.diff(startVS, 'minutes')
let secondsVS = nowDate.diff(startVS, 'seconds')

document.getElementById('yaersVS').innerHTML = `${yaersVS.toPrecision(2)} years`;
document.getElementById('monthsVS').innerHTML = `${monthsVS} months`;
document.getElementById('daysVS').innerHTML = `${daysVS} days`;
document.getElementById('hoursVS').innerHTML = `${hoursVS} hours`;
document.getElementById('minutesVS').innerHTML = `${minutesVS} minutes`;
document.getElementById('secondsVS').innerHTML = `${secondsVS} seconds`;
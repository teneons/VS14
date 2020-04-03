let startVS = moment('2016-10-14T20:56')
let nowDate = moment()


let yaersVS = nowDate.diff(startVS, 'year')
let monthsVS = nowDate.diff(startVS, 'month')
let daysVS = nowDate.diff(startVS, 'day')
let hoursVS = nowDate.diff(startVS, 'hours')
let minutesVS = nowDate.diff(startVS, 'minutes')
let secondsVS = nowDate.diff(startVS, 'seconds')



console.log(`Бусь, вже написаний код який рахує ск ми разом, і ми разом: \n\n${yaersVS} роки \n \n${monthsVS} місяці
    \n${daysVS} дні 
    \n${hoursVS} години 
    \n${minutesVS} хвилини 
    \n${secondsVS} секунди`)
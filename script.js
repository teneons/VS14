function outDate() {
    const startVS = moment('2016-10-14T20:56')
    let nowDate = moment(new Date())

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
}

setInterval(outDate, 1000)



//btn heart
let heartVS = document.getElementById("heartVS");

//easterEgg
function easterEgg() {
    let clickCount = 0;

    const startEE =  () => {
        clickCount += 2;
        heartVS.innerText = `❤️${clickCount}`;

        if(clickCount == 14){
            initsnow();
            heartVS.removeEventListener('click', startEE);
        }
    };
    
    heartVS.addEventListener('click', startEE);

}

easterEgg()


//http://gnatkovsky.com.ua/skript-padayushhego-snega.html
//settings
var snowmax = 30;
var snowletter = "❤️";
var sinkspeed = 0.4; 
var snowmaxsize = 20;
var snowminsize = 8;
var snowingzone = 3;
  
var snow = new Array();
var marginbottom;
var marginright;
var timer;
var i_snow = 0;
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent;
var browserok = true;

function randommaker(range) {
    rand = Math.floor(range * Math.random());
    return rand;
}


function initsnow() {
    marginbottom = window.innerHeight;
    marginright = window.innerWidth;
    
    var snowsizerange = snowmaxsize - snowminsize;
    for (i = 0; i <= snowmax; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        snow[i] = document.getElementById("s" + i);
        snow[i].size = randommaker(snowsizerange)+snowminsize;
        snow[i].style.fontSize = snow[i].size + "px";
        snow[i].sink = sinkspeed * snow[i].size / 5;
        if (snowingzone == 1) {snow[i].posx = randommaker(marginright - snow[i].size)}
        if (snowingzone == 2) {snow[i].posx = randommaker(marginright / 2 - snow[i].size)}
        if (snowingzone == 3) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4}
        if (snowingzone == 4) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2}
        snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size);
        snow[i].style.left = snow[i].posx + "px";
        snow[i].style.top = snow[i].posy + "px";
    }
    movesnow();
}
function movesnow() {
    for(i = 0;i <= snowmax; i++) {
        crds[i] += x_mv[i];
        snow[i].posy += snow[i].sink;
        snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
        snow[i].style.top = snow[i].posy + "px";
        if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
            if (snowingzone == 1) {snow[i].posx = randommaker(marginright - snow[i].size)}
            if (snowingzone == 2) {snow[i].posx = randommaker(marginright / 2 - snow[i].size)}
            if (snowingzone == 3) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4}
            if (snowingzone == 4) {snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2}
            snow[i].posy = 0;
        }
    }
    var timer = setTimeout("movesnow()",50);
}
for (i = 0;i <= snowmax; i++) {
    document.write("<span id = 's"+i+"' style='position:absolute;top:-"+snowmaxsize+"px;'>"+snowletter+"</span>");
}

/*
if (browserok) {
    window.onload = initsnow;
}
*/
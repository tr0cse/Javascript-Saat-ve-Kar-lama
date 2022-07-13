
let isminiz = prompt("Adınız nedir? ");

let parag = document.createElement("p");

parag.innerHTML = `
Merhaba ${isminiz}, hoşgeldin! `;

let mydiv = document.querySelector("#greetings");

mydiv.append(parag)

timer();

function timer(){
 var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var sec = currentTime.getSeconds()
if (minutes < 10){
    minutes = "0" + minutes
}
if (sec < 10){
    sec = "0" + sec
}
var t_str = hours + ":" + minutes + ":" + sec + " ";

let day;
switch (new Date().getDay()) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
       day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
  }
  

 document.getElementById('time_span').innerHTML = `${day} `;
 document.getElementById('time_span').innerHTML += t_str;
 document.getElementById('yazi').innerHTML = "tarihinde Başlangıç Seviye Frontend Web Development Patikası'nda Javascript bölümü 1. ödevindesin.";
 setTimeout(timer,1000);
}
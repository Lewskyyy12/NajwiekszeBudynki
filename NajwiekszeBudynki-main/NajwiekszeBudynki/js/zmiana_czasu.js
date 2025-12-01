const zegarek = document.getElementById("zegarek");

function wartosci(){
    var dzis = new Date();
    var dzien = dzis.getDate();
    var miesiac = dzis.getMonth();
    miesiac +=1;
    var rok = dzis.getFullYear();

    var godzina = dzis.getHours();
    if(godzina<10) godzina = '0'+godzina;
    var minuta = dzis.getMinutes();
    if(minuta<10) minuta = '0'+minuta;
    var sekunda = dzis.getSeconds();
    if(sekunda<10) sekunda = '0'+sekunda;

    zegarek.innerHTML = dzien+'/'+miesiac+'/'+ rok+" "+godzina+':'+minuta+':'+sekunda;
    
}

wartosci();
setInterval(wartosci, 1000);
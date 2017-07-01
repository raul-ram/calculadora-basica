var f= new Date();
var h = new Date();


var dia = new Array(7);
dia[0] = "Domingo";
dia[1] = "Lunes";
dia[2] = "Martes";
dia[3] = "Miércoles";
dia[4] = "Jueves";
dia[5] = "Viernes";
dia[6] = "Sabado";


function iniciarHora() {
    hoy  = new Date();
    h = hoy.getHours();
    m = hoy.getMinutes();
    s = hoy.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById('fecha').innerHTML =dia[f.getDay()]+" "+f.getDate()+"/"+f.getMonth()+"/"+f.getFullYear();
    document.getElementById('reloj').innerHTML = h +":"+ m + ":" + s;

    t = setTimeout('iniciarHora()', 500);
}

function checkTime(i) {
    if(i<10){
        i = '0'+i;
    }
    return i;
}

window.onload = function(){
    iniciarHora();
}

// console.log("Fecha:"+dia[f.getDay()]+" >> "+f.getDate()+"/"+f.getMonth()+"/"+f.getFullYear());
// console.log("Hora:"+h.getHours()+":"+h.getMinutes()+":"+h.getSeconds());



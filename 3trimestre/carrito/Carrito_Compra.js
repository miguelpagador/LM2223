var pc1 
pc1 = "<img src='Imagenes/Torre1.png'>";
document.getElementById("pc_a").innerHTML=pc1

var tcl1;
tcl1 = "<img src='Imagenes/teclado1.png'>";
document.getElementById("teclado_a").innerHTML=tcl1;

var rt1;
rt1 = "<img src='Imagenes/raton1.png'>";
document.getElementById("ratones_a").innerHTML=rt1;

var alt1;
alt1 = "<img src='Imagenes/altavoz4.png'>";
document.getElementById("altavoces_a").innerHTML=alt1;



var contordenador = 0;
document.getElementById("contordenador").textContent = contordenador;
function sumar1() {
    contordenador++;
  document.getElementById("contordenador").textContent = contordenador;
}
function restar1() {
    if (contordenador<=0)
    {
        document.getElementById("contordenador").textContent = 0;
    }
    else 
    {
    contordenador--;
  document.getElementById("contordenador").textContent = contordenador;
    }
    }




var conteclado = 0;
document.getElementById("conteclado").textContent = conteclado;
function sumar2() {
    conteclado++;
  document.getElementById("conteclado").textContent = conteclado;
}
function restar2() {
    if (conteclado<=0)
    {
        document.getElementById("conteclado").textContent = 0;
    }
    else 
    {
    conteclado--;
    document.getElementById("conteclado").textContent = conteclado;
    }
    
}




var contraton = 0;
document.getElementById("contraton").textContent = contraton;
function sumar3() {
    contraton++;
  document.getElementById("contraton").textContent = contraton;
}
function restar3() {
    if (contraton<=0)
    {
        document.getElementById("contraton").textContent = 0;
    }
    else 
    {
    contraton--;
  document.getElementById("contraton").textContent = contraton;
    }
    }




var contaltavoz = 0;
document.getElementById("contaltavoz").textContent =contaltavoz;
function sumar4() {
    contaltavoz++;
  document.getElementById("contaltavoz").textContent =contaltavoz;
}
function restar4() {
    if (contaltavoz<=0)
    {
        document.getElementById("contaltavoz").textContent = 0;
    }
    else 
    {
    contaltavoz--;
  document.getElementById("contaltavoz").textContent = contaltavoz;
    }
    }


const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
    console.group('click')
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
})

var ordenadores = document.getElementById("ordenadores");
ordenadores.addEventListener("click", function(){
    var pc1 
    var pc2
    var pc3
    var pc4
    pc1 = "<img src='Imagenes/Torre_pc.png'>";
    document.getElementById("pc1").innerHTML=pc1;
    pc2 = "<img src>";
    document.getElementById("pc2").innerHTML=pc2;    
    pc3 = "<img src>";
    document.getElementById("pc3").innerHTML=pc3;
    pc4 = "<img src>";
    document.getElementById("pc4").innerHTML=pc4;
})

var teclados = document.getElementById("teclados");
teclados.addEventListener("click", function(){
    var teclado1 
    teclado1 = "<img src='Imagenes/teclado.png'>";
    document.getElementById("teclado1").innerHTML=teclado1;
})
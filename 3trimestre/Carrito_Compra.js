const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
    console.group('click')
    document.getElementById('sidebar').classList.toggle('active');
    console.log(document.getElementById('sidebar'))
})

var ordenadores = document.getElementById("ordenadores");
ordenadores.addEventListener("click", function(){
    var img 
    img = "<img src='Imagenes/Torre_pc.jfif'>";
    document.getElementById("pc1").innerHTML=img;
})

var teclados = document.getElementById("teclados");
teclados.addEventListener("click", function(){
    var img2 
    img2 = "<img src='Imagenes/teclado.png'>";
    document.getElementById("teclado1").innerHTML=img2;
})
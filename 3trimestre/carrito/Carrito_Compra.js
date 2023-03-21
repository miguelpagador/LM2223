
function ordenadores(){
    var pc1 
    var pc2
    var pc3
    var pc4
    pc1 = "<img src='Imagenes/Torre1_pc.png'>";
    document.getElementById("pc1").innerHTML=pc1
    pc2 = "<img src='Imagenes/Torre2_pc.png'>";
    document.getElementById("pc2").innerHTML=pc2
    pc3 = "<img src='Imagenes/Torre3_pc.png'>";
    document.getElementById("pc3").innerHTML=pc3
    pc4 = "<img src='Imagenes/Torre4_pc.png'>";
    document.getElementById("pc4").innerHTML=pc4;
}

var teclados = document.getElementById("teclados");
teclados.addEventListener("click", function(){
    var img2 
    img2 = "<img src='Imagenes/teclado.png'>";
    document.getElementById("teclado1").innerHTML=img2;
})
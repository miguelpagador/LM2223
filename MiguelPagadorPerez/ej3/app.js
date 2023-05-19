$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '<Ant',
    nextText: 'Sig>',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};

$.datepicker.setDefaults($.datepicker.regional['es']);
$(document).ready(function () {
    $("#ida").datepicker({ minDate: 1, maxDate: "+1M"});
    $("#vuelta").datepicker({ minDate: 1});
});

var localizador =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
function codigoAleatorio() { 
let Char;
let cd=''; 
for(i = 1; i<=23;i++){
Char=localizador[(Math.random()*(localizador.length-1)).toFixed(0)];
if(parseInt(Math.random()*2)==1)
cd+=Char.toUpperCase(Char);
else
cd+=Char;
  }
  
  return cd; 
 }

 $(function(){

 class Persona {
    constructor(nombre, apellido, email, dni, ida, vuelta) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.dni = dni;
      this.ida = ida;
      this.vuelta = vuelta;
    }
  }
          
  window.Persona = Persona;
 })
 $("#formulario").submit(function(et){
        
    //Prevencion del submit.
    
    et.preventDefault();
    et.stopPropagation();

    let elementos = $("#formulario").children("input, select, textarea");
    let persona = new Persona($($(elementos)[0]).val(), $($(elementos)[1]).val(), $($(elementos)[2]).val(), $($(elementos)[3]).val(), $($(elementos)[4]).val(), $($(elementos)[5]).val(), $($(elementos)[6]).val(), $($(elementos)[7]).val());
    
    
 $("#data").append(`<h1> Datos del solicitante de turno: </h1>
 <p> ${persona.nombre} ${persona.apellido} </p>
 <p> ${persona.email} </p>
 <p> ${persona.dni} </p>
 <p> ${persona.ida} </p>
 <p> ${persona.vuelta} </p>
 </br>`);

});
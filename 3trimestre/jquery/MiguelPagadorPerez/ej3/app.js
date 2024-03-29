function aleatorizaLocalizador() {
    let abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let aleatorio = ""; //12 letras
    for (let index = 0; index < 12; index++) {
        aleatorio = aleatorio + abecedario.charAt(Math.floor(Math.random() * abecedario.length));
    }
    return aleatorio; // ya tenemos el localizador
}

$(document).ready(function() {
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
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
    $('#vuelta').prop('disabled', true);
    // para el checkbox de idayvuelta
    $('#idayvuelta').change(function () {
        if (this.checked) {
            $('#vuelta').val("");
            $('#vuelta').prop('disabled', false);
        } else {
            $('#vuelta').prop('disabled', true);
        }
    });
    // configura el datepicker de ida
    $('#ida').datepicker({
        minDate: '+1D',
        maxDate: '+1M',
        dateFormat: 'dd-mm-yy',
        onClose: function (selectedDate) {
            if (!$('#idayvuelta').prop('checked')) {
                $('#vuelta').datepicker("option", "minDate", selectedDate);
            }
        }
    });
    $('#vuelta').datepicker({
        dateFormat: 'dd-mm-yy'
    });
    $('#reservation-form').submit(function(e){
        e.preventDefault();
        let nombre = $('#name').val();
        let apellidos = $('#surname').val();
        let email = $('#email').val();
        let dni = $('#dni').val();
        let ida = $('#ida').val();
        let vuelta = $('#vuelta').val()
        let localizador = aleatorizaLocalizador();
        $('#resumen').empty();
        let resumen = "Nombre : "+nombre+"<br>"+
                        "Apellido : "+apellidos+"<br>"+
                        "Email : "+email+"<br>"+
                        "dni : "+dni+"<br>"+
                        "ida : "+ida+"<br>"+
                        "vuelta : "+vuelta+"<br>"+
                        "Localizador : "+localizador+"<br>";

        $('#resumen').append(resumen);
       
        $('#qrcode').html('<img src="https://api.qrserver.com/v1/create-qr-code/?data='+resumen+';size=100x100" alt="" title="" />')
    })
})
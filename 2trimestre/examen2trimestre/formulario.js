  
        function validar(){

            var nombre=document.getElementById('nombre').value;
            var apellido=document.getElementById('apellidos').value;
            var email=document.getElementById('email').value;
            var pass=document.getElementById('contra').value;
            var pass2=document.getElementById('contra2').value;
            var conditions=document.getElementById('condiciones').value;
            var nomOK=0;
            var apellOK=0;
            var passOK=0;
            var correoOK=0;
            var pass2OK=0;
            var condicionesOK=0;

            document.getElementById('vnombre').innerHTML='';
            document.getElementById('vapellidos').innerHTML='';
            document.getElementById('vcorreo').innerHTML='';
            document.getElementById('vcontra').innerHTML='';
            document.getElementById('vcontra2').innerHTML='';


         function perfil(){
            if(nomOK==1 && apellOK==1 &&  correoOK==1 && passOK==1 && pass2OK==1){
            let Usuario = nombre[0]+nombre[1]+apellidos[0]+apellidos[1];
                    alert('Su usuario es '+Usuario);
            }
         }

         function valEmail(valor){
            if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor))
        {   
        document.getElementById('vemail').innerHTML="";
        correoOK=1;
        } 

        else 
        {
        correoOK=0;
        document.getElementById('vemail').innerHTML="Formato de correo erróneo"
        }
         }
            if(nombre==""){
                document.getElementById('vnombre').innerHTML='Este campo es obligatorio';
            }
            else{
                document.getElementById('vnombre').innerHTML='';
                nomOK=1;
            }
            

           if(apellidos==""){
                    document.getElementById('vapellidos').innerHTML='Este campo es obligatorio';
            }

            else{
                document.getElementById('vapellidos').innerHTML='';
                apellOK=1;
            }
          

            if(email==""){
                document.getElementById('vemail').innerHTML='Este campo es obligatorio';
            }
            else{
                valEmail(email);
            }
             
            
            if(document.getElementById('contra').value==""){
                document.getElementById('vcontra').innerHTML='Este campo es obligatorio';
            }
            else{
                if(document.getElementById('contra').value.length<8){
                    document.getElementById('vcontra').innerHTML='las contraseñas deben tener mínimo 8 dígitos'
                }
                else{
                document.getElementById('vcontra').innerHTML='';
                passOK=1;
                }            
            }


            if(document.getElementById('contra2').value==""){
                document.getElementById('vcontra2').innerHTML='las contraseñas deben tener mínimo 8 dígitos';
            }
            else{
                if(pass2!=pass){
                    document.getElementById('vcontra2').innerHTML='Su contraseña no coincide';
                }
                else{
                document.getElementById('vcontra2').innerHTML='';
                pass2OK=1;
            }                           
            }

            if(document.getElementById('condiciones').value==null){
                document.getElementById('vcondiciones').innerHTML='Debes aceptar las condiciones del formulario';
            }
            perfil();
         }

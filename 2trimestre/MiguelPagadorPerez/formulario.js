        function validar(){
            if(document.getElementById("nombre").value=="")
            {
                document.getElementById("vnombre").innerHTML="Este campo es obligatorio";
            }
            else
            {  
                if(document.getElementById("nombre").value.length<3)
                {
                    document.getElementById("vnombre").innerHTML="Debe tener mínimo 3 caracteres";
                }
                else
                {
                document.getElementById("vnombre").innerHTML="";
                }                   
            }

            var name=0;
            var mail=0;
            var mail2=0;

            function generaUsuario(){
                numazar = Math.floor(Math.random() * 999999);
                document.getElementById("resultado").innerHTML= numAzar;
                if(name==1 && mail==1 && mail2==1 ){
                let Usuario = nombre[nombre.length-3]+mail[1];
                        document.getElementById("user")('Su usuario es '+Usuario +numAzar);
                }
             }

             function valEmail(valor){
                if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor))
                {   
                    document.getElementById("vemail").innerHTML="";
                } 
                else 
                {
                    document.getElementById("vemail").innerHTML="El mail no es correcto"
                }
                }   
    
                if(document.getElementById("email").value=="")
                {
                    document.getElementById("vemail").innerHTML="Debe rellenar este campo";
                }
                else
                {
                    valEmail(document.getElementById("email").value);
                }
                if(document.getElementById("email").value=="")
                {
                    document.getElementById("vemail").innerHTML="El mail no es correcto";
                }            
                else
                {
                        document.getElementById("vemail").innerHTML="";
                }
            
            function valEmail(valor){
                if (/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor))
                {   
                    document.getElementById("vemail2").innerHTML="";
                } 
                else 
                {
                    document.getElementById("vemail2").innerHTML="El mail no es correcto"
                }
                }   
    
                if(document.getElementById("email2").value=="")
                {
                    document.getElementById("vemail2").innerHTML="Debe rellenar este campo";
                }
                else
                {
                    valEmail(document.getElementById("email2").value);
                }
                if(document.getElementById("email2").value=="")
                {
                    document.getElementById("vemail2").innerHTML="El mail no es correcto";
                }            
                else
                {
                        document.getElementById("vemail").innerHTML="";
                }

                generaUsuario();
        }



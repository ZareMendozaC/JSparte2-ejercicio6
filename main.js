function calcular()
{
    var numero1= parseInt(document.getElementById("numero1").value);
    var numero2= parseInt(document.getElementById("numero2").value);
    var respuesta = document.getElementById("respuesta");
    var resultado;

  if(( (numero1==10 && numero2!=10) | (numero1!=10 && numero2==10) ) | (numero1+numero2==10) ){
    //pasa, return 1
    // codigo html para mostrar el resultado
    respuesta.innerHTML = '<h4>Es menor que 21, entonces: </h4><br>'+'<h4>21-'+numero1+' es igual a:  </h4>'+'<h3 class="animated wobble result">'+resultado+'</h3>';
  }
    
    else{

        // codigo html para mostrar el resultado
        respuesta.innerHTML = '<h4>Es mayor que 21, entonces: </h4><br>'+'<h4>2*('+numero1+'-21) es igual a:  </h4>'+'<h3 class="animated wobble result">'+resultado+'</h3>';
    }
}
function limpiar(){// esta funcion limpia el campo del número
     numero1 = document.getElementById("numero1").value="";
     numero2 = document.getElementById("numero2").value="";
     resultado= 0;
     respuesta.innerHTML = '<br><h4>Prueba otra vez!!</h4><br> <h3 class="animated wobble result">'+resultado+'</h3>';
}


function calcular()
{
    var numero1= parseInt(document.getElementById("numero1").value);
    var numero2= parseInt(document.getElementById("numero2").value);
    var respuesta = document.getElementById("respuesta");
    var resultado;
  //si alguno de los numeros es 10 o la suma de ambos es 10
  if(( (numero1==10 && numero2!=10) | (numero1!=10 && numero2==10) ) | (numero1+numero2==10) ){
    //pasa, return 1
    // codigo html para mostrar el resultado
    respuesta.innerHTML = '<h4>Paso las condiciones, entonces: </h4><br><br>'+'<h3 class="animated wobble result">VERDADERO</h3>';
  }  
    else{

        // codigo html para mostrar el resultado
        respuesta.innerHTML = '<h4>No paso las condiciones, entonces: </h4><br><br>'+'<h3 class="animated wobble result">FALSO</h3>';
    }
}

function limpiar(){// esta funcion limpia el campo del número
     numero1 = document.getElementById("numero1").value="";
     numero2 = document.getElementById("numero2").value="";
     resultado= 0;
     respuesta.innerHTML = '<br><h4>Prueba otra vez!!</h4><br> <h3 class="animated wobble result">'+resultado+'</h3>';
}


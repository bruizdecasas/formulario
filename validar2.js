function validacion() {
    console.log("comprobando la validación")
    if (nombre.value.trim() == "") {
        alert('Por favor, escribe tu nombre');
        nombre.focus();
        return false;
    } 
    console.log("comprobado el nombre")
    if (direccion.value.trim() == "") {
        alert('Por favor, escribe tu dirección');
        direccion.focus();
        return false;
    }
    console.log ("comprobada la dirección")
    if (telefono.value.trim() == "") {
        alert('Por favor, escribe tu teléfono');
        telefono.focus();
        return false;
    }
    console.log ("comprobado el teléfono")
    if (email.value.trim() == "") {
        alert('Por favor, escribe tu e-mail');
        direccion.focus();
        return false;
    }
    console.log ("comprobado e-mail")

    tamano = document.getElementsByName("tamano");
            var seleccionado = false;
            for(var i=0; i<tamano.length; i++) {
                if(tamano[i].checked) {
                    seleccionado = true;
                    break;
                }
            }
            if(!seleccionado) {
                alert('Debes seleccionar un tamaño para tu pizza');
                return false;
            }
    console.log ("comprobado tamaño")  
    
    if (!ingredientes.checked) {
        alert('Debes seleccionar algún ingrediente');
        return false;
    }
    console.log ("comprobados los ingredientes")  
            
}

window.onload = function(){
    formulario_pizza.onsubmit = validacion;                                    
}
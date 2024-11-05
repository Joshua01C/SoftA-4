class Tarea {
    ejercicio1(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")

        if (opcion === "8") {
            msg = opcion + " Respuesta Correcta, Excelente "+ "<br>"
        } else {
            msg = opcion + " Respuesta incorrecta, siga intentando " +  "<br>"
        } 
        resp.innerHTML  = msg
    }
    ejercicio2(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "20") {
            msg = opcion + " Respuesta Correcta, Excelente"+ "<br>"
        } else {
            msg = opcion + " Respuesta incorrecta, siga intentando " +  "<br>"
        } 
        resp.innerHTML  = msg
    }
    ejercicio3(opcion) {
        let resp, msg = ""
        resp = document.getElementById("resp")
        
        if (opcion === "40") {
            msg = opcion + " Respuesta Correcta, Excelente"+ "<br>"
        } else {
            msg = opcion + " Respuesta incorrecta, siga intentando " +  "<br>"
        } 
        resp.innerHTML = msg
    }
    ejercicio4(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "32") {
            msg = opcion + " Respuesta Correcta, Excelente"+ "<br>"
        } else {
            msg = opcion + " Respuesta incorrecta, siga intentando " +  "<br>"
        } 
        resp.innerHTML  = msg
    }
    //Lógica de Comparaciones
    ejercicio5(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
    
        if (opcion === "8") {
            msg += "Respuesta Correcta" + "<br>"
            msg += "El número: " + opcion + " es mayor que el número 5" + "<br>"
        } else {
            msg += "Respuesta Incorrecta" + "<br>"
            msg += "El número: " + opcion + " es menor que el número 8" + "<br>"
        }
        resp.innerHTML  = msg
    }
    ejercicio6(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "Maria") {
            msg += "Respuesta Correcta" + "<br>"
            msg += opcion + " tiene 14 años es mayor que Juan "+ "<br>"
        } else if (opcion === "Juan"){
            msg += "Respuesta Incorrecta" + "<br>"
            msg += opcion + " tiene 12 años es menor que Maria "+ "<br>"
        }
        resp.innerHTML  = msg
    }
    ejercicio7(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "Laura") {
            msg += "Respuesta Correcta" + "<br>"
            msg += opcion + " de 7 años es mas joven que Pedro "+ "<br>"
        } else {
            msg += "Respuesta Incorrecta" + "<br>"
            msg += opcion +" de 9 años es mayor que Laura "+ "<br>"
        }
        resp.innerHTML  = msg
    }
   
    // Introducción a Condicionales
    ejercicio8(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "Paragua" || opcion === "Abrigo" || opcion === "Gorra" || opcion === "Protector solar" ) {
            msg = opcion + " respuesta correcta" + "<br>"
        }else {
            msg = opcion + " respuesta incorrecta" +  "<br>"
        }
        resp.innerHTML  = msg
    }
    ejercicio9(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "Alfonbra") {
            msg = opcion + " Respuesta Correcta" + "<br>"
        } else {
            msg = opcion + " Respuesta Incorrecta" +  "<br>"
        }
        resp.innerHTML  = msg
    }
    ejercicio10(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "balcón"){
            msg = opcion + " respuesta correcta" + "<br>"
        } else {
            msg = opcion + " respuesta incorrecta" +  "<br>"
        }
        resp.innerHTML  = msg
    }
    ejercicio11(opcion) {
        let resp, msg=""
        resp = document.getElementById("resp")
        
        if (opcion === "Botella") {
            msg = opcion + " respuesta correcta" + "<br>"
        } else {
            msg = opcion + " respuesta incorrecta" +  "<br>"
        }
        resp.innerHTML  = msg
    }

}

let tarea = new Tarea()


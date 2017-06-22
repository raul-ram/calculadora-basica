function operar(signo) {
    var num1 = document.getElementById('campo1').value;
        num1 = parseInt(num1);

    // se puede hacer también asi 
    var num2 = parseInt(document.getElementById("campo2").value);
    var resultado;
    if (signo == '+') {
        resultado = num1 + num2;
    }
    if (signo == '-') {
        resultado = num1 - num2;
    }
    if (signo == '*') {
        resultado = num1 * num2;
    }
    if (signo == '/') {
        resultado = num1 / num2;
    }
    document.getElementById("resultado").value = resultado;
}


// boton borrar deja vacio los campos de entrada y de resultado
function borrar(){
    console.log("vaciando");
    document.getElementById('campo1').value = "";
    document.getElementById("campo2").value = "";
    document.getElementById("resultado").value = "";
}
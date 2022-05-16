function validarNumero(matematica, lengua, EFSI) {
    value = TP_1EFSI.getElementById("matematica");
    return value;

}

function CheckInputsbyInput() {

    var input = document.getElementsByTagName("input")
    var validado;
    for (let index = 0; index < input.length; index++) {
        if (input[index].value >= 0 && input[index].value <= 10) {
           validado = true;
        } else {
            validado = false;
        }
    }

    if(validado){ alert("Recibido.")}else{alert("[ERROR] Lo ingresado no es valido")}
}

function CalcularPromedio() {
    var input = document.getElementsByTagName("input")
    var promedio = 0;
    for (let index = 0; index < input.length; index++) {
        promedio =  promedio + parseInt(input[index].value) ;
        console.log(promedio)
    }
    promedio = promedio / input.length;

    alert(`Promedio: ${promedio}`)
}

function MayorNota(){
    var input = document.getElementsByTagName("input")
    var mayor = 0;
    var materia;
    for (let index = 0; index < input.length; index++) {
        if (mayor < parseInt(input[index].value)){
            mayor = parseInt(input[index].value);
            materia = input[index].name;
        } else if (mayor == parseInt(input[index].value)){
            materia = `${materia}  y  ${input[index].name}`;
        }
    }
    
    alert(`La materia con mayor nota es: ${materia}`)
}

//no anda el required
//y el verificar numero
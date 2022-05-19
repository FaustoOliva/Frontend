function CheckInputsbyInput(nota, materia) {

    var input = document.getElementsByTagName("input")
     if(nota > 0 && nota <= 10){
        document.getElementById(materia).style.color="green"
        return true;
     }else{
        document.getElementById(materia).style.color="red"
        return false;
     }
         
    }

function ValidarNumeros(){
    var mate = CheckInputsbyInput(document.getElementById('mate').value, 'mate')
    var lengua = CheckInputsbyInput(document.getElementById('lengua').value, 'lengua')
    var efsi = CheckInputsbyInput(document.getElementById('efsi').value, 'efsi')

    if(mate && lengua && efsi){
        return true;
    }else{
        return false;
    }
}

function CalcularPromedio() {
    var input = document.getElementsByTagName("input")
    let mostrarp = 0;
    
    
    if(ValidarNumeros()){
        for (let index = 0; index < input.length; index++) {
            mostrarp =  mostrarp + parseInt(input[index].value);
        }
        mostrarp = mostrarp / (input.length);
        document.getElementById("resultado").innerHTML=mostrarp;
        } else{
        alert("Las notas no son validas. Cambienlas");
    }
   
}

function MayorNota(){
    var input = document.getElementsByTagName("input")
    var mayor = 0;
    var materia;
    if (ValidarNumeros()){
        for (let index = 0; index < input.length; index++) {
        if (mayor < parseInt(input[index].value)){
            mayor = parseInt(input[index].value);
            materia = input[index].name;
        } else if (mayor == parseInt(input[index].value)){
            materia = `${materia}  y  ${input[index].name}`;
        }
    }
   return materia;

    } else {
        alert ("Las notas no son validas. Cambienlas");
    }
    
}

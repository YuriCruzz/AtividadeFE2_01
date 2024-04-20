function calcularIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let calculo = document.getElementById("resultado");

    if (peso === '' || altura === ''){
        alert('Por favor, preencha os compos de pesso e altura corretamente!');
        return;
    }

    let imc = peso / (altura * altura);
    let classificador = '';

    if (imc < 18.5){
        classificador = 'Está Abaixo do Peso!';
        calculo.style.backgroundColor = "#9C27B0";
    } else if (imc >= 18.5 && imc < 25){
        classificador = 'Está com o Peso Normal!';
        calculo.style.backgroundColor = "#4CAF50";
    } else if (imc >= 25 && imc < 30){
        classificador = 'Está com Sobrepeso!';
        calculo.style.backgroundColor = "#FFC107";
    } else if (imc >= 30 && imc < 35){
        classificador = 'Está com Obesidade Grau I!';
        calculo.style.backgroundColor = "#FF9800";
    } else if (imc >= 35 && imc < 40){
        classificador = 'Está com Obesidade Grau II!';
        calculo.style.backgroundColor = "#FF5722";
    } else if (imc >= 40){
        classificador = 'Está com Obesidade Grau III (Obesidade Mórbida)!';
        calculo.style.backgroundColor = "#795548";
    }

    calculo.innerText = `Seu IMC  é de ${imc.toFixed(2)}. ${classificador}`;
}
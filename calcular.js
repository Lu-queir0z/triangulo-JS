let numero1;
let numero2;
let numero3;
let resultado;

function triangulo(){

    numero1 = parseInt(document.querySelector('#NUMERO1').value)
    numero2 = parseInt(document.querySelector('#NUMERO2').value)
    numero3 = parseInt(document.querySelector('#NUMERO3').value)

    let imgTriangulo = document.querySelector('#imgTriangulo')

    if((numero1 == numero2) && (numero1 == numero3)){
    resultado = 'triangulo Equilatero'
    imgTriangulo.setAttribute('src','img/equilatero.png');
    }else if ((numero1 != numero2) && (numero1 != numero3) && (numero2 != numero3)){
    resultado = 'Triangulo Escaleno'
    imgTriangulo.setAttribute('src','img/escaleno.png');
    }else{
    resultado = 'Triangulo Isoceles'
    imgTriangulo.setAttribute('src','img/isoceles.png');
    }
    document.querySelector('#resultado').innerHTML = resultado;
}
//funçao de limpar formulario
function limpar(){
    document.querySelector('#NUMERO1').value = '';
    document.querySelector('#NUMERO2').value = '';
    document.querySelector('#NUMERO3').value = '';
    document.querySelector('#resultado').innerHTML = '-';
}

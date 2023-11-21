
let numero1;
let numero2;
let numero3;
let resultado;

function triangulo(){
    numero1 = parseInt(document.querySelector('#NUMERO1').value)
    numero2 = parseInt(document.querySelector('#NUMERO2').value)
    numero3 = parseInt(document.querySelector('#NUMERO3').value)

    if (numero1 == numero2 && numero2 ==  numero3 ) {
        resultado = 'triangulo equilatero'
    }
    else if(numero1 ==  numero2 != numero3 ) {
        resultado = 'triangulo isoceles'
    }else {
        resultado = 'triangulo escaleno'
    }

    document.querySelector('#resultado').innerHTML = resultado;
}
/*
//tratamento das imagens dos operadores
let select = document.querySelector('#slcOperador');

select.addEventListener('change',function(){

    let imgOperacao = document.querySelector('#imgOperacao');
    let op = select.options[select.selectedIndex].value;

    if(op == '+'){
        imgOperacao.setAttribute('src','img calculadora/adicionar.png');
    }

    if(op == '-'){
        imgOperacao.setAttribute('src','img calculadora/subtracao.png');
    }

    if(op == '*'){
        imgOperacao.setAttribute('src','img calculadora/multiplicacao.png');
    }

    if(op == '/'){
        imgOperacao.setAttribute('src','img calculadora/divisao.png');
    }
});
*/

//funçao de limpar formulario
function limpar(){

    document.querySelector('#NUMERO1').value = '';
    document.querySelector('#NUMERO2').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    
}
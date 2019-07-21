import { factorizar, ordenarFactores } from './factorizacionModule.js';

var btnFactorizar = document.getElementById('btnFactorizar');
var btnLimpiar = document.getElementById("btnLimpiar");
var resultado = document.getElementById("resultado");
var inNumero = document.getElementById('numero');

btnFactorizar.addEventListener('click', factorizacion);
btnLimpiar.addEventListener('click', limpiar);

function factorizacion()
{
    //Limpio lo que este escrito en resultado
    resultado.textContent = null;

    //Obtengo el numero
    numero = inNumero.value.trim(); //Quito los espacios en blanco (input numero)

    if(isNaN(numero) || !Number.isInteger(Number(numero)) || numero == '')
    {
        resultado.innerHTML = 'Debe ingresar un numero entero';
        return;
    }

    //Obtengo los factores del numero
    let factores = factorizar(numero);
    //Los ordeno y cuento cuantos hay de cada uno
    factores = ordenarFactores(factores);

    //Renderizado
    factores.map(factor => {
        let numero = document.createTextNode(factor.number);
        resultado.appendChild(numero);

        let sup = document.createElement('sup');
        let content = document.createTextNode(factor.quantity);
        
        sup.appendChild(content);
        resultado.appendChild(sup);
    });

    //Si es negativo se agregan parentesis y signo negativo.
    if(numero < 0)
    {
        const contentR = resultado.innerHTML;
        resultado.innerHTML = '-(' + contentR + ')';
    }
}

function limpiar()
{
    let arr = [];
    
    arr.push(resultado, inNumero);
    clearElements(arr);
}

function clearElements(clear = [])
{
    clear.map((e) => {
        e.tagName == 'INPUT' ? e.value = '' : e.innerHTML = '';
    });
}




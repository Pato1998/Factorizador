import { factorizar, ordenarFactores } from './factorizacionModule.js';

var btnFactorizar = document.getElementById('btnFactorizar');
var resultado = document.getElementById("resultado");

btnFactorizar.addEventListener('click', factorizacion);

function factorizacion()
{
    //Limpio lo que este escrito en resultado
    resultado.textContent = null;

    //Obtengo el numero
    let numero = document.getElementById('numero').value;
    numero = numero.trim(); //Quito los espacios en blanco

    //Valido que sea un numero
    if(isNaN(numero) || numero.trim() == '' || Number.isInteger(numero)) //Valida que sea numero y entero
    {
        resultado.innerText = "Debe ingresar un numero entero";
        return;
    }

    //Obtengo los factores del numero
    let factores = factorizar(numero);

    //Los ordeno y cuento cuantos hay de cada uno
    factores = ordenarFactores(factores);

    //Los muestro
    factores.map(factor => {
        let numero = document.createTextNode(factor.number);
        resultado.appendChild(numero);

        let sup = document.createElement('sup');
        let content = document.createTextNode(factor.quantity);
        
        sup.appendChild(content);
        resultado.appendChild(sup);
    });
}




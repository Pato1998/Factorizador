export function factorizar(numero)
{
    //Si es 0 o 1 se retorna el mismo numero en un array
    if(numero == 0 || numero == 1){ return [numero]; }
    //Se convierte el numero a positivo en caso de ser negativo
    if(numero < 0){ numero = numero * -1; }

    let factores = [];

    for(let i=1; i <= numero; i++)
    {
        if(numero % i === 0)
        {
            factores.push(i);
            numero = numero / i;
            i = 1;
        }
    }

    factores.shift();

    return factores;
}

export function ordenarFactores(numeros)
{
    //Quita los repetidos y los devuelve como un objeto
    const sinRepetidos = numeros.filter((item, index) => {
        return numeros.indexOf(item) === index;
    }).map(item => {
        return {number:item, quantity:0};
    });

    //Cuenta cuantos hay de cada uno y se lo asigna a su propiedad quantity
    for(let i=0; i < sinRepetidos.length; i++)
    {
        for(let j=0; j < numeros.length; j++)
        {
            if(sinRepetidos[i].number === numeros[j])
            {
                sinRepetidos[i].quantity += 1;
            }
        }
    }

    return sinRepetidos;
}


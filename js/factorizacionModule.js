export function factorizar(numero)
{
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
    const sinRepetidos = numeros.filter((item, index) => {
        return numeros.indexOf(item) === index;
    }).map(item => {
        return {number:item, quantity:0};
    });

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


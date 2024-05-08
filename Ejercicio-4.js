const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una frase:', (frase )=>{
    rl.question('Ingrese la palabra que desea reemplazar: ',(palabracambiar)=>{
        rl.question("Ingrese la palabra nueva: ",(palabraNueva) =>{
            const fraseModificada = frase.replace(new RegExp(palabracambiar,'gi'),palabraNueva)
            console.log('frase modificada: ',fraseModificada);
        })
    })
}
)

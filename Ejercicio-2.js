const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, introduce una cadena de texto: ', (cadenaUsuario) => {
  const numeroCaracteres = cadenaUsuario.length;
  console.log(`La cadena de texto tiene ${numeroCaracteres} caracteres.`);
  rl.close();
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Por favor, introduce tu nombre: ", (nombreUsuario) => {
  rl.question("Por favor ingresa tu apellido:", (apellidoUsuario) => {
    console.log(`Hola ${nombreUsuario} ${apellidoUsuario}`);
    rl.close();
  });
});

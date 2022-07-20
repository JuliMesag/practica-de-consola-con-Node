const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors')
const argv = require('./config/yargs')

console.clear();

// console.log(argv);



crearArchivo(argv.n, argv.l, argv.h)
    .then(salida => console.log(salida.rainbow))
    .catch(err => console.log(err));

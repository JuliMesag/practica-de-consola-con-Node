const argv = require('yargs')
    .options('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero que se desea multiplicar'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla de multiplicar en consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'Este es el numero hasta donde quieres multiplicar'
    })
    .check((argv, options) => {
        if (isNaN (argv.n)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;


module.exports = argv
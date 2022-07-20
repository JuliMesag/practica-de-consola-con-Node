const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (num = 5, l, h) => {

    try {

        let salida = ''
        let consola = ''

        for (let i = 1; i <= h; i++) {
            const multiplicacion = num * i;
            const operacion = `${num} x ${i} = ${multiplicacion}\n`
            const operacion2 = `${num} ${'x'.green} ${i} ${'='.green} ${multiplicacion}\n`
            salida += operacion
            consola += operacion2
        }

        //Listar
        if (l === true) {
            console.log('======================='.green)
            console.log('     Tabla del:', colors.red(num) )
            console.log('======================='.green)

            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${num}.txt`, salida)

        return `tabla-${num}.txt creado`

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}

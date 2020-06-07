const fs = require('fs');
var colors = require('colors');
let listartabla = (base, limite) => {
    console.log('*************'.yellow);
    console.log(`Tabla de ${base}`.rainbow);
    console.log('*************'.underline.green);
    for (let i = 1; i <= limite; i++) {

        let resultado;
        console.log(`${base} * ${i} = ${base*i}`);
    }


}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {

            let resultado;
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });
    });
}
module.exports = {
    crearArchivo,
    listartabla
}
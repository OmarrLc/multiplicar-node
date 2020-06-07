const argv = require('./config/yargs').argv;
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar')
var colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listartabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}




// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv.base);
// console.log(argv.limite);
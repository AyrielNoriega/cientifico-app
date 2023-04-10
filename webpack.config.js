//El módulo de path proporciona utilidades para trabajar con rutas de archivos y directorios. 
const path = require('path');

//archivo necesario para trabajar con html
const HtmlWebpackPlugin = require('html-webpack-plugin');


 //Aquí se encuentra toda la configuración de lo que va a suceder. Modulo para exportar.
 module.exports = {
    entry: './src/index.js',//Punto de entrada con su dirección.Aquí vive el código inicial y de aquí parte al desarrollo.
     //Donde se envía el proyecto estructurado y compilado listo para producción.
    output: { 
        //Creamos el lugar dónde se exportará el proyecto.
        path: path.resolve(__dirname, 'dist'),
        //Este es el nombre del archivo final para producción.
        filename: 'main.js',
    },
    //Extensiones que vamos a utilizar.
    resolve: {
        extensions: ['.js'], 
    },
     //Se crea un modulo con las reglas necesarias que vamos a utilizar.
    module: {
        rules: [
            {
                //Nos permite identificar los archivos según se encuentran en nuestro entorno.
                test: /\.js$/,
                //Excluimos la carpeta de node modules
                exclude: /node_modules/,
                use: {
                    //Utilizar un loader como configuración establecida.
                    loader: 'babel-loader',
                    // options: {
                    //     presets: [
                    //       ['@babel/preset-env', { targets: "defaults" }]
                    //     ],
                    //   }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin([
            {
                //Cómo vamos a inyectar un valor a un archivo HTML.
                inject: true,
                //Dirección donde se encuentra el template principal
                template: './public/index.html', 
                //El nombre que tendrá el archivo
                filename: './index.html'
            }
        ])  
    ]
 }
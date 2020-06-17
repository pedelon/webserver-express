const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'pedro delgado',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando por el puerto 8080');
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', { nombre: 'pedro delGado' });
});
app.get('/about', function(req, res) {
    res.render('about');
});


app.get('/demojson', function(req, res) {
    // res.send('Hola Mundo')
    let salida = {
        nombre: 'pedro delgado',
        edad: 32,
        url: req.url
    }

    res.send(salida);
});

app.get('/data', function(req, res) {

    res.send('Hola data');
})

app.listen(port, () => {
    console.log(`Ecuchando peticiones en el puerto ${port}`);
});
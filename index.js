var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    console.log('hola mundo');
});

var users = [
    { id: 1, name: 'carlos', apellido: 'suarez', edad: 34 },
    { id: 2, name: 'maria', apellido: 'velez', edad: 34 },
    { id: 3, name: 'maria', apellido: 'mesa', edad: 22 },
    { id: 4, name: 'pedro', apellido: 'jaramillo', edad: 34 }
];

app.get('/usuario', function(req, res) {
    res.send({ message: "respuesta correcta", users: users });
});

app.get('/usuario/:id', function(req, res) {

    var user = users.filter(function(user) {
        return user.id == req.params.id;
    });
    res.send({ user: user });
});

app.post('/usuario', function(req, res) {

    var body = req.body;
    var user = {
        name: body.name,
        apellido: body.apellido,
        edad: body.edad,
        id: body.id
    };

    users.push(user);

    res.status(201).send({ users: users });
});

app.listen(3000, function() {
    console.log('escuchando en http:localhost:3000');
});
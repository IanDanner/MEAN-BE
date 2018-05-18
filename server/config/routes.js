var Pets = require('../controllers/pets.js');

module.exports = function(app){
    //Pet Routes
    app.get('/Pets', function(req, res){
        Pets.showAll(req, res);
    }),
    app.get('/Pets/:id', function(req, res){
        Pets.showOne(req, res);
    }),
    app.post('/Pets/', function(req, res){
        Pets.create(req, res);
    }),
    app.put('/Pets/:id', function(req, res){
        Pets.update(req, res);
    }),
    app.delete('/Pets/:id', function(req, res){
        Pets.delete(req, res);
    })

}
const express = require('express');
const OngController = require('./controlers/OngController');
const IncidentsController = require('./controlers/IncidentsController');
const ProfileController = require('./controlers/ProfileController');
const SessionController = require('./controlers/SessionController');
const routes = express.Router();

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.post('/sessions',SessionController.create );
routes.get('/profile', ProfileController.index);
//Casos
routes.get('/incidents',IncidentsController.index);
routes.post('/incidents',IncidentsController.create);
routes.delete('/incidents/:id',IncidentsController.delete);
module.exports = routes;
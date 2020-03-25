const express = require('express');

const OngController = require('./controllers/ongController.js');
const IncidentController = require('./controllers/incidentController.js');
const ProfileController = require('./controllers/profileController.js');
const SessionController = require('./controllers/sessionController.js');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes
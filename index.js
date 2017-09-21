console.log('Hola mi nameo es Aj');

const express = require('express');

const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

const main_ctrl = require('./controllers/main_ctrl.js');

app.get('/user', main_ctrl.getName);

app.get('/location', main_ctrl.getLocation);

app.get('/occupations', main_ctrl.getOccupations );

app.get('/occupations/latest',main_ctrl.getOneOccupation);

app.get('/hobbies', main_ctrl.getHobbies);

app.get('/hobbies/:type', main_ctrl.getOneHobbie);

app.get('/family', main_ctrl.getFamily);

app.get('/family/:gender', main_ctrl.getFamilyGender);

app.get('/restaurants', main_ctrl.getRestaurant);

app.get('/restaurants/:name', main_ctrl.getRestName);

app.put('/name/:id', main_ctrl.putName);

app.put('/location/:id', main_ctrl.putLocation);

app.post('/hobbies', main_ctrl.postHobbies);

app.post('/occupations', main_ctrl.postOcc);

app.post('/family', main_ctrl.postFamily);

app.post('/restaurants', main_ctrl.postRest);

app.get('/skills', main_ctrl.getSkills);

app.post('/skills', main_ctrl.postSkills);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

const express = require('express');
const path = require('path');
const events = require('./eventsController');
const app = express();
const rootPath = path.normalize(__dirname + '/../');
const bodyParser = require('body-parser');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);
app.get('*', function(req, res) {
    res.sendFile(rootPath + '/app/index.html');
});

app.listen(port);
console.log('Listening on port ' + port + '!');

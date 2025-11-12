// config/express.js

const express = require('express');
const path = require('path');

module.exports = function () {
    const app = express();
    
    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '../public')));
    require('../app/routes/index.server.routes')(app);

    return app;
};

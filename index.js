const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const {HomeRouter} = require("./routes/home");
const {configuratorRouter} = require("./routes/configurator");
const {orderRouter} = require("./routes/order");
const {handlebarsHelpers} = require("./utils/handlebars-helpers");



class CookieMaker {
constructor() {
    this._configureApp();
    this._setRoutes();
    this._run();
}

_configureApp() {
    this.app = express();

    this.app.use(express.static('public'));
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.engine('.hbs', hbs.engine({
        extname: '.hbs',
        helpers: handlebarsHelpers,
    }));
    this.app.set('view engine', '.hbs');
}

_setRoutes() {
    this.app.use('/', new HomeRouter().router);
    this.app.use('/configurator', new ConfiguratorRouter().router));
    this.app.use('/order', orderRouter);
}

_run() {
    this.app.listen(3000, 'localhost', () => {
        console.log('listening on http://localhost:3000');
    });
}
}

new CookieMaker()
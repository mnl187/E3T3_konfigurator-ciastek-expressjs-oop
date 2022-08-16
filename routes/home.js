const express = require('express');
const {getCookieSettings} = require("../utils/get-cookie-settings");

class HomeRouter {
    constructor() {
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/', this.home);
    }

    home(req, res) {
        const {sum, addons, base, allBases, allAddons} = getCookieSettings(req);

        res.render('home/index', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    }
}


module.exports = {
    HomeRouter,
};
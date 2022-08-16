const express = require('express');
const {getCookieSettings} = require("../utils/get-cookie-settings");
const {Router} = require("express");

class HomeRouter extends express.Router {
constructor() {
    super();
    this.get('/',(req, res) => res.send('ok'));
    }
}

const home = new HomeRouter();
module.exports = {
    HomeRouter,
};
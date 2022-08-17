const express = require('express');

function getCookieSettings() {};

const orderRouter = express.Router();

orderRouter

    .get('/summary', (req, res) => {
        const {sum, addons, base, allBases, allAddons} = getCookieSettings(req);

        res.render('order/summary', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    })

    .get('/thanks', (req, res) => {
        const {sum} = getCookieSettings(req);

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            });
    });

module.exports = {
    orderRouter,
};

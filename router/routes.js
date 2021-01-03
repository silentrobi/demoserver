const ServerController = require('../controllers/ServerController');

exports.routes = function (app) {

    app.post('/api/server/get-qrcode', [
        ServerController.sendQrCode
    ]);

    app.post('/api/server/payment', [
        ServerController.makePayment
    ]);
};
const QRCodePaymentController = require('../controllers/QRCodePaymentController');

exports.routes = function (app) {

    app.post('/api/server/get-qrcode', [
        QRCodePaymentController.sendQrCode
    ]);

    app.post('/api/server/payment', [
        QRCodePaymentController.makePayment
    ]);
};
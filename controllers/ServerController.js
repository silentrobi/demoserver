const TokenApi = require('../Services/TokenApi');

exports.sendQrCode = function (req, res) {

    TokenApi.getQrCode().then(
        data => {
            return res.status(200).send(data.body);
        })
        .catch(
            e => res.status(400).send(e)
        );
};

exports.makePayment = function makePayment(req, res) {

    TokenApi.makePayment(req.body.qrData, parseInt(req.body.amount))
        .then(
            data => {
                return res.status(200).send(data.body);
            })
        .catch(
            e => res.status(400).send(e)
        );
};
const TokenApi = require('../Services/TokenApi');

exports.sendQrCode = function (req, res) {
    TokenApi.getQrCode(req.body.amount).then(
        data => {
            return res.status(200).send(data.body);
        })
        .catch(
            e => res.status(400).send(e)
        );
}

exports.makePayment = function makePayment(req, res) {
    console.log(req.body);
    TokenApi.makePayment(req.body.qrData, req.body.amount)
        .then(
            data => {
                return res.status(200).send(data.body);
            })
        .catch(
            e => res.status(400).send(e)
        );
}
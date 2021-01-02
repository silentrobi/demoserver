const request = require('superagent');
const apiConfig = require('./ApiConfig');

const BASE_URL = "https://sandbox-api.payosy.com/api/";

class TokenApi {

    static getQrCode(amount) {
        return request.post(BASE_URL + 'get_qr_sale')
            .set({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-ibm-client-id': apiConfig.clientId,
                'x-ibm-client-secret': apiConfig.clientSecret
            })
            .send({
                "totalReceiptAmount": amount
            });
    }

    static makePayment(qrData, amount) {
        return request.post(BASE_URL + 'payment')
            .set({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-ibm-client-id': apiConfig.clientId,
                'x-ibm-client-secret': apiConfig.clientSecret
            })
            .send({
                "returnCode": 1000,
                "returnDesc": "success",
                "receiptMsgCustomer": "beko Campaign/n2018",
                "receiptMsgMerchant": "beko Campaign Merchant/n2018",
                "paymentInfoList": [
                    {
                        "paymentProcessorID": 67,
                        "paymentActionList": [
                            {
                                "paymentType": 3,
                                "amount": amount,
                                "currencyID": 949,
                                "vatRate": 800
                            }
                        ]
                    }
                ],
                'QRdata': qrData
            });
    }
}

module.exports = TokenApi;
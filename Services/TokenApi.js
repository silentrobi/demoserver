const request = require('superagent');
const apiConfig = require('./ApiConfig');

const BASE_URL = "https://sandbox-api.payosy.com/api/";

function randomAmountSelect() {
    const amountList = [50.0, 63.78, 20, 80.2, 65.23, 71, 30, 35.5];
    const random = Math.floor(Math.random() * amountList.length);

    return amountList[random];
}

const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'x-ibm-client-id': apiConfig.clientId,
    'x-ibm-client-secret': apiConfig.clientSecret
}

class TokenApi {

    static getQrCode() {

        return request.post(BASE_URL + 'get_qr_sale')
            .set(header)
            .send({
                "totalReceiptAmount": randomAmountSelect()
            });
    }

    static makePayment(qrData, amount) {

        return request.post(BASE_URL + 'payment')
            .set(header)
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
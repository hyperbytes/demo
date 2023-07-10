const ipn = require('paypal-ipn');

module.exports = {
    ipn: function (params) {
        //options contains the input data you use in the UI for this SC action. You will probably pass the params that the IPN verify function needs via a binding in the UI. 
        ipn.verify(params, function callback(err, msg) {
            if (err) {
                return { status: 'Error' };
            } else {
                // Do stuff with original params here
                if (params.payment_status == 'Completed') {
                    // Payment has been confirmed as completed, return something
                    return { status: 'OK' }
                }
                else {
                    return { status: 'err' }
                }
            }
        });
    }
}
'use strict';
// Load modules

const Moment = require('moment');
const Promise = require('bluebird');
// const Request = require('request-promise');
const Request = require('promise-request-retry');
const UrlUnshort = require('url-unshort')();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_ID, process.env.TWILIO_AUTH_TOKEN);

// Declare internals

const internals = {
    KNACK_OBJECTS_IDS: {
        BuyerInvoice: 'object_45',
        Contract: 'object_6',
        ContractInvoice: 'object_35',
        SupplierInvoice: 'object_44',
        TimeExpense: 'object_33',
        lineItems: 'object_37',
        contractAmendment: 'object_47',
        proposalObject: 'object_12',
        Worker: 'object_30'
    },
    CONCURRENCY_OPTS: {
        concurrency: 1
    }
};

exports.plugin = {
    name: 'api',
    register: function (server) {

        const { Knack } = server.plugins;
        // const KNACK_OBJECTS_IDS = Knack.objects();

        server.route({
            method: 'POST',
            path: '/twiliosms',
            handler: async function (request, h) {

                const payload = request.payload;

                return await client.messages
                .create({
                    body: payload.message,
                    from: '+19547873493',
                    to: `+${payload.to}`
                 });
            }
        });

        server.route({
            method: 'GET',
            path: '/test',
            handler: async function (request, h) {

                console.log(`http://httpstat.us/${request.query.status}?sleep=${request.query.sleep}`);

                const sArray = [];

                for (let i = 0; i < 52; i++) {
                    const status = 400 + i;
                    sArray.push(status);
                }   

                console.log(sArray)
                

                const options = {
                    uri: `http://httpstat.us/${request.query.status}?sleep=${request.query.sleep}`,
                    method: 'GET',
                    retry : 3,
                    accepted: sArray,
                    delay: 5000
                };
            
                return await Request(options);
            }
        });
    }
};

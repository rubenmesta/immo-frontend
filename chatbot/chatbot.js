'use strict';
const dialogflow = require('dialogflow');
const config = require('../config/keys');
const {struct} = require('pb-util');

const projectId = config.googleProjectID;
// const sessionId = config.dialogFlowSessionID;
// const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey,
};

const sessionClient = new dialogflow.SessionsClient( {projectId, credentials});
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);


module.exports = {
    textQuery: async function(text, parameters = {}) {
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
    eventQuery: async function(event, parameters = {}) {
        // let sessionPath = sessionClient.sessionPath(config.googleProjectID, config. dialogFlowSessionID);
        let self = module.exports;

        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: struct.encode(parameters),
                    languageCode: config.dialogFlowSessionLanguageCode,
                },
            },
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
    handleAction: function(responses){
        return responses;
    },


} 
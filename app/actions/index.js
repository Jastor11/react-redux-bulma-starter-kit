import axios from 'axios';
import * as types from './types';

const PERLA_API_ROUTE = '';
const PERLA_ACCESS_TOKEN = 'Bearer e1f4c040-39bb-11e6-b362-6f4056cfdd7b';

const GET_BOTS_ROUTE = 'https://api.lightninginabot.com/v1/bots';

export function listBotsAtDylansAPI(message) {
    console.log('listBotsAtDylansAPI executed');
//     const getAllBots = fetch(GET_BOTS_ROUTE, {
//     });
    const getAllBots = axios({
        method: 'get',
        url: GET_BOTS_ROUTE,
//         baseURL: GET_BOTS_ROUTE,
        // `headers` are custom headers to be sent
        headers: {
            'Authorization': PERLA_ACCESS_TOKEN,
            'Access-Control-Allow-Origin': 'http://javascript-projects-146189.nitrousapp.com/',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
        .then( response => {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            return response;
        })
        .catch( error => {
            if (error.response) {
                // The request was made, but the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
            return error;
        });

    return {
        type: types.LIST_BOTS,
        message,
        answer: getAllBots
    };
}

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function postToPerla(message) {
  // Send a POST request
    const perlaResponse = axios({
        method: 'post',
//         url: '/user/12345',
        baseURL: PERLA_API_ROUTE,
        // `headers` are custom headers to be sent
        headers: {'Authorization': 'Bearer ' + PERLA_ACCESS_TOKEN},
        // `params` are the URL parameters to be sent with the request
        // Must be a plain object or a URLSearchParams object
//         params: {
//             ID: 12345
//         },
        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout: 30000,
        transformRequest: [function(data) {
          // Do whatever you want to transform the data

            return data;
        }],
        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        transformResponse: [function(data) {
          // Do whatever you want to transform the data

            return data;
        }],
        // `responseType` indicates the type of data that the server will respond with
        // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
        responseType: 'json', // default
        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredentials: false, // default
        // `validateStatus` defines whether to resolve or reject the promise for a given
        // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
        // or `undefined`), the promise will be resolved; otherwise, the promise will be
        // rejected.
        validateStatus: function(status) {
            return status >= 200 && status < 300; // default
        },
        // `data` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        // When no `transformRequest` is set, must be of one of the following types:
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - Browser only: FormData, File, Blob
        // - Node only: Stream
        data: {
            message: message
        }
    })
    .then(function(response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        return response;
    })
    .catch(function(error) {
        console.log(error);
        return error;
    });

    return {
        type: types.POST_TO_PERLA,
        message: message,
        response: perlaResponse
    };
}

/*

Getting Started

Get An Access Token
Go to https://lightninginabot-dashboard.herokuapp.com/signup and create an account. Once you’re in your dashboard, click on the avatar in the top right corner and select "Account" from the dropdown. Your access token will be shown on this page.
Authentication
Our API uses Bearer tokens to authenticate requests. All calls into the API should have an "Authorization" header with the value "Bearer YOUR_ACCESS_TOKEN".
Example API Requests
All the following examples use cURL to make the requests. Replace the all-caps words with the appropriate fill-ins. You can copy paste these examples into your terminal to run them. If you're developing in Node.js we also have an open source API wrapper available to use. The link is in the Resources section at the bottom of this document.
Bots
Create a bot
$ curl -X POST https://api.lightninginabot.com/v1/bots \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{  "name": "YOUR_NEW_BOTS_NAME" }'
List your bots
$ curl https://api.lightninginabot.com/v1/bots \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"
Retrieve a bot
$ curl https://api.lightninginabot.com/v1/bots/BOT_ID \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN"

Send your bot a message
$ curl -X POST https://api.lightninginabot.com/v1/bots/BOT_ID/incoming-messages \
-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
-H "Content-Type: application/json" \
-d '{  "message": "What is the answer to life, the universe and everything?", "user":"YOUR_NAME"}'

Creating Bot Nodes
Bot nodes are the skills/commands/reports that your bot can run in response to messages it receives. Nodes are scripts that are written locally and uploaded to our server. Once a node is uploaded, you can give any of your bots access to use it.

TODO...


Resources
Lightning in a Bot command line tool to generate bot nodes (aka skills/commands/reports):
https://www.npmjs.com/package/liab

Lightning in a Bot API wrapper (Node.js)
https://www.npmjs.com/package/liab-client

*/

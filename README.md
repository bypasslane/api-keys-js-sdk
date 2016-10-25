API KEY Javascript SDK
======================

SDK for authenticating and signing requests.

## Setup
`
npm install --save git+https://git@github.com/bypasslane/api-keys-js-sdk.git`

### Usage

Authenticating express request.

```
var sdk = require("bypass-api-keys-sdk");

## request should be an express request object.
if(sdk.authenticRequest(request, "my secret key")){
  console.log("The request is good!")
}else{
  console.log("The request is Bad!")
}

```

Signing Outgoing request

```
var sdk = require("bypass-api-keys-sdk");
## body is an Object that will be converted to a JSON string
var headers = sdk.signedRequestHeaders(body, 'application/json', 'https://api.bypassmobile.com/venue/events' , 'GET', 'my-key', 'my secret token')

var requestPromise = require('request-promise');

var options = {
    uri:  'https://api.bypassmobile.com/venue/events',
    headers: headers,
    json: true
  }

requestPromise(options);

```

Getting the Secret Token

```
var sdk = require("bypass-api-keys-sdk");

var promise = sdk.getSecret("https://serverurl", "my-key")

##promise will return an object like {"secret":"my-secret", "venue_id": 1234}


```


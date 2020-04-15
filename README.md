# Knack Twilio

Back-end repository

Install instruction:


Node v10.17.0  
npm v6.11.3  
HapiJS v18.1.0

1. Clone repository ``git clone https://github.com/SOLUNTECH/Knack-to-Endpoint-to-Twillio.git``  
2. Install modules using npm install  
3. Create environment .env file with Twilio credentials and the server port to assign  
```
TWILIO_ACCOUNT_ID=xxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxx
PORT=9095
```
4. Run the server  using ``node server``  
5. The endpoints work under the base url [http://localhost](http://localhost/):{{port}}/api/v1/twiliosm  
6. From postman you can test the endpoint  
```
URL: [http://localhost:9095/api/v1/twiliosms](http://localhost:9095/api/v1/twiliosms)  
Method: POST  
Body JSON: {  
	"message": "test message",  
	"to": "573008169506"  
}

Response: {  
	"accountSid": "xxxxxxxxxxxxxxxxxxxxx",  
	"apiVersion": "2010-04-01",  
	"body": "test message",  
	"dateCreated": "2020-04-14T21:48:52.000Z",  
	"dateUpdated": "2020-04-14T21:48:52.000Z",  
	"dateSent": null,  
	"direction": "outbound-api",  
	"errorCode": null,  
	"errorMessage": null,  
	"from": "+1xxxxxxxx",  
	"messagingServiceSid": null,  
	"numMedia": "0",  
	"numSegments": "1",  
	"price": null,  
	"priceUnit": "USD",  
	"sid": "xxxxxxxxxxxxxxxxxxxxx",  
	"status": "queued",  
	"subresourceUris": {  
		"media": "/2010-04-01/Accounts/xxxxxxxxxxxxxxxxxxxxx/Messages/SM70ea733f0f884b90b4549c570c5f2b15/Media.json"  
	},  
	"to": "+1xxxxxxxx",  
	"uri": "/2010-04-01/Accounts/xxxxxxxxxxxxxxxxxxxxx/Messages/SM70ea733f0f884b90b4549c570c5f2b15.json"  
}
```

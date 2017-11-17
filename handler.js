//////////////////////////////////////////////////////////////////////////////////
//                      Serverless Shopify to Segment		                   	//
//     git@github.com:amaysim-au/vaya-serverless-shopify-to-ecgw.git		    //
//////////////////////////////////////////////////////////////////////////////////

'use strict';

module.exports.handler = (event, context, callback) => {

	const BitlyClient = require('bitly');
	const bitly = BitlyClient(process.env.BITLY_KEY);

	var	bodyJSON = JSON.parse(event.body);

	var eventList = ['shorten','expand','clicks','info','referrers']; 

	var eventName = typeof event.queryStringParameters.event !== 'undefined' && event.queryStringParameters.event !== '' ? event.queryStringParameters.event : 'not-set',
		url = typeof bodyJSON.url !== 'undefined' && bodyJSON.url !== '' ? bodyJSON.url : 'http://www.bitly.com';
	
	if ( eventList.includes( eventName ) ){

		bitly[eventName](url)
		.then(function(result) {

		  callback_response( result );

		})
		.catch(function(error) {

		  callback_response( error );

		});

	 }
	 else {

	 	var respnseBody = {
	 		"status_code": 200,
	         "status_txt": "error",
	         "error": "event_not_set"
	         };

		callback_response( respnseBody );
	 }


	function callback_response( respnseBody ){
	
		//Set response
		const response = {
			statusCode: 200,
			body: JSON.stringify({
				message : 'Done',
				input : event,
				body : respnseBody,
				eventName: eventName
			}),
		};

		//Return response
		callback(null, response);
	}

};
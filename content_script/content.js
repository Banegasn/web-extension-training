var facade = new ContentFacade();

/**
 * rmcRequest is a remote method call (RMC) with the following form:
 * 
 *  { methodName: 'messageX', arguments: { arg1: 'value', arg2: 'value'}}
 * 
 *  messageX: must be one of the messages that the ContentFacade object understands. 
 *  arguments: is an object 
 */
var handleRmcRequest = function (rmcRequest) {
	{
		let prom = new Promise((resolve, reject) => {
			//Reject if the rmcRequest is not well formed
			if ((! rmcRequest.hasOwnProperty('methodName')) || (! rmcRequest.hasOwnProperty('arguments'))) {
				reject("Invalid remote method call");
				return;
			}
			//Reject if the Façade does not not understand the message
			if (! facade[rmcRequest.methodName]) {
				reject("Message not understood");
				return;
			}
			resolve(facade[rmcRequest.methodName](rmcRequest.arguments))
		});	
		return prom
	}
}

browser.runtime.onMessage.addListener(handleRmcRequest);



var facade = new ContentFacade();

/**
 * rmcRequest is a remote method call (RMC) with the following form:
 * 
 *  { methodName: 'messageX', arguments: { arg1: 'value', arg2: 'value'}}
 * 
 *  messageX: must be one of the messages that the ContentFacade object understands. 
 *  arguments: is an object 
 */
browser.runtime.onMessage.addListener(rmcRequest => {
	let prom = new Promise((resolve, reject) => {
		// Reject is any of the to elements of the RMC is missing
		if ((! rmcRequest.methodName) | (! rmcRequest.arguments)) {
			reject("Invalid remote method call");
			return;
		}
		//Reject if the Façade does not will nor understand the message
		if (! facade[rmcRequest.methodName]) {
			reject("Message not understood");
			return;
		}
		resolve(facade[rmcRequest.methodName](rmcRequest.arguments))
	});	
	return prom
});


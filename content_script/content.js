// Listen for messages
var popup = new Popup();

browser.runtime.onMessage.addListener(request => {

	if (request.action) {
		popup.receive(request);
		return true;
	}else{
		currentWeb = new Web(document);
		return Promise.resolve({titles: currentWeb.getH1TitlesWithMoreThan5Chars() });
	}

});
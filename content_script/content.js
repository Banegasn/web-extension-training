// Listen for messages
var popup = new Popup();

browser.runtime.onMessage.addListener(request => {

	if (request.action) {
		popup.receive(request);
		return true;
	}else{
		wrapper = new DocumentWrapper(document);
		return Promise.resolve({titles: wrapper.getH1TitlesWithMoreThan5Chars() });
	}

});
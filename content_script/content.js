// Listen for messages
browser.runtime.onMessage.addListener(request => {
	if (request.results) {
		Popup.receive(request)
		return true;
	}else{
		currentWeb = new Web(document);
		return Promise.resolve({titles: currentWeb.getH1TitlesWithMoreThan5Chars() });
	}
});
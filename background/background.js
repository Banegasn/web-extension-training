plugin = new Plugin();
browser.browserAction.onClicked.addListener(tab => { plugin.openPage(tab); });
plugin = new Plugin();
browser.browserAction.onClicked.addListener(function(tab) { plugin.openPage(tab); });
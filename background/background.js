// Esta funcion deberia ser un llamado a un metodo? de una clase estatica?
var tabid = null;

function openPage(tab) {
	tabid = tab.id;
	wiki = new Wiki();
	browser.tabs.sendMessage(
		tab.id, 
		{text: 'report_back'}
	).then(
  		response => { 
  			response.titles.forEach(function(title) {
				wiki.search(title,showResults);
			});
  		}
  	);
  	
}

function showResults(results){
	browser.tabs.sendMessage(
		tabid, 
		{results: results}
	).then( () => 1 );
}

browser.browserAction.onClicked.addListener(openPage);
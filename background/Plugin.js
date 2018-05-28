/**
 * Plugin
 */
class Plugin {

	constructor(){
		this.tab = [];
		this.showing_results = false;
		this.wiki = new Wiki();
	}

	static start(tab){
		var plugin = new Plugin();
		plugin.openPage(tab);
	}

	openPage(tab){
		this.tab = tab;
		var plugin = this;
		
		browser.tabs.sendMessage(
			tab.id, 
			{text: 'report_back'}
		).then(
	  		response => { 
	  			response.titles.forEach(function(title) {
					plugin.search(title);
				});
	  		}
	  	);
	}

	search(title){
		this.wiki.search(title, this);
	}

	showResults(results){
		var plugin = this;
		
		if (results.titles.length > 0) {

			browser.tabs.sendMessage(
				plugin.tab.id, 
				{results: results}
			).then( 
				plugin.showing_results = true 
			);

		}
	}

	clearResultsPanel(){
		this.wiki.clearResults();

		browser.tabs.sendMessage(
			plugin.tab.id, 
			{action: "clear"}
		).then( 
			plugin.showing_results = false 
		);
	}

}

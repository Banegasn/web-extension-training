/**
 * Plugin
 */
class Plugin {

	constructor(){
		this.tab = [];
		this.showing_results = false;
		this.wiki = new Wiki();
	}

	openPage(tab){
		
		if (this.showing_results) {
			this.clearResultsPanel();
			return;
		}

		this.tab = tab;
		var plugin = this;
		
		browser.tabs.sendMessage(
			tab.id, 
			{text: 'report_back'}
		).then(
	  		response => { 
	  			if (response.titles.length == 0) {
	  				plugin.noTitlesFound();
	  			}
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
		browser.tabs.sendMessage(
			this.tab.id, 
			{action:'show', results: results}
		)
		this.showing_results = true;
	}

	clearResultsPanel(){
		this.wiki.clearResults();

		browser.tabs.sendMessage(
			this.tab.id, 
			{action: "clear"}
		)

		plugin.showing_results = false;
	}

	noTitlesFound(){
		browser.tabs.sendMessage(
			this.tab.id, 
			{action: "alert-not-found"}
		)
	}

}

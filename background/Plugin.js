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
		const me = this;
		
		browser.tabs.sendMessage(
			tab.id, 
			{ methodName: 'getTitles', arguments: {}}
		).then(
	  		response => { 
	  			if (response.titles.length == 0) {
	  				me.noTitlesFound();
	  			}
	  			response.titles.forEach(title => {me.search(title)});
	  		}
	  	);
	}

	search(title){
		this.wiki.search(title, this);
	}

	showResults(results){
		browser.tabs.sendMessage(
			this.tab.id, 
			{ methodName: 'showResults', arguments: {results: results}}
		)
		this.showing_results = true;
	}

	clearResultsPanel(){
		this.wiki.clearResults();

		browser.tabs.sendMessage(
			this.tab.id, 
			{ methodName: 'closePopup', arguments: {}}
		)

		plugin.showing_results = false;
	}

	noTitlesFound(){
		browser.tabs.sendMessage(
			this.tab.id, 
			{ methodName: 'alertNoTitlesAvailable', arguments: {}}
		)
	}

}
